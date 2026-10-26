import { validate } from 'class-validator';
import { CreateUserDto } from './create-user.dto.js';

describe('CreateUserDto', () => {
  const createDto = (password: string) =>
    Object.assign(new CreateUserDto(), {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password,
    });

  it('reports only the minimum-length error for a short password', async () => {
    const errors = await validate(createDto('abc'));
    const passwordError = errors.find((error) => error.property === 'password');

    expect(passwordError?.constraints).toEqual({
      minLength: 'Password must be at least 8 characters long',
    });
  });

  it('reports the complexity error once the password is long enough', async () => {
    const errors = await validate(createDto('lowercase8'));
    const passwordError = errors.find((error) => error.property === 'password');

    expect(passwordError?.constraints).toEqual({
      matches:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    });
  });

  it('accepts a password that meets both requirements', async () => {
    const errors = await validate(createDto('SecurePass123!'));

    expect(errors).toHaveLength(0);
  });
});
