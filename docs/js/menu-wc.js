'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
    <button type="button"
        class="search-input-clear"
        aria-label="Clear search"
        data-search-input-clear>&times;</button>
</div>
` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="architecture.html" data-type="chapter-link">
                                        <span class="icon ion-ios-git-branch"></span>Architecture
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AdminModule-26b1bb671273cbe43b7bba949356895be995af3c8712bda9710ba00dbbde3bd4ae66597793dad5ee44baea72a6d7c7ba2f110bfb0521589ff70a45ccacdf0a25"' : 'data-bs-target="#xs-controllers-links-module-AdminModule-26b1bb671273cbe43b7bba949356895be995af3c8712bda9710ba00dbbde3bd4ae66597793dad5ee44baea72a6d7c7ba2f110bfb0521589ff70a45ccacdf0a25"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-26b1bb671273cbe43b7bba949356895be995af3c8712bda9710ba00dbbde3bd4ae66597793dad5ee44baea72a6d7c7ba2f110bfb0521589ff70a45ccacdf0a25"' :
                                            'id="xs-controllers-links-module-AdminModule-26b1bb671273cbe43b7bba949356895be995af3c8712bda9710ba00dbbde3bd4ae66597793dad5ee44baea72a6d7c7ba2f110bfb0521589ff70a45ccacdf0a25"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-26b1bb671273cbe43b7bba949356895be995af3c8712bda9710ba00dbbde3bd4ae66597793dad5ee44baea72a6d7c7ba2f110bfb0521589ff70a45ccacdf0a25"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-26b1bb671273cbe43b7bba949356895be995af3c8712bda9710ba00dbbde3bd4ae66597793dad5ee44baea72a6d7c7ba2f110bfb0521589ff70a45ccacdf0a25"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-26b1bb671273cbe43b7bba949356895be995af3c8712bda9710ba00dbbde3bd4ae66597793dad5ee44baea72a6d7c7ba2f110bfb0521589ff70a45ccacdf0a25"' :
                                        'id="xs-injectables-links-module-AdminModule-26b1bb671273cbe43b7bba949356895be995af3c8712bda9710ba00dbbde3bd4ae66597793dad5ee44baea72a6d7c7ba2f110bfb0521589ff70a45ccacdf0a25"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnimalsModule.html" data-type="entity-link" >AnimalsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AnimalsModule-e129c815a2f33326ec5f50f43849f85a172ecfaa7b60893cb23780c6d0c6cee550553c7f986e0e71e04a680bd3d7d7955dfbbd24f76b31f2a7fd9385df125d06"' : 'data-bs-target="#xs-controllers-links-module-AnimalsModule-e129c815a2f33326ec5f50f43849f85a172ecfaa7b60893cb23780c6d0c6cee550553c7f986e0e71e04a680bd3d7d7955dfbbd24f76b31f2a7fd9385df125d06"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AnimalsModule-e129c815a2f33326ec5f50f43849f85a172ecfaa7b60893cb23780c6d0c6cee550553c7f986e0e71e04a680bd3d7d7955dfbbd24f76b31f2a7fd9385df125d06"' :
                                            'id="xs-controllers-links-module-AnimalsModule-e129c815a2f33326ec5f50f43849f85a172ecfaa7b60893cb23780c6d0c6cee550553c7f986e0e71e04a680bd3d7d7955dfbbd24f76b31f2a7fd9385df125d06"' }>
                                            <li class="link">
                                                <a href="controllers/AnimalsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnimalsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AnimalsModule-e129c815a2f33326ec5f50f43849f85a172ecfaa7b60893cb23780c6d0c6cee550553c7f986e0e71e04a680bd3d7d7955dfbbd24f76b31f2a7fd9385df125d06"' : 'data-bs-target="#xs-injectables-links-module-AnimalsModule-e129c815a2f33326ec5f50f43849f85a172ecfaa7b60893cb23780c6d0c6cee550553c7f986e0e71e04a680bd3d7d7955dfbbd24f76b31f2a7fd9385df125d06"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnimalsModule-e129c815a2f33326ec5f50f43849f85a172ecfaa7b60893cb23780c6d0c6cee550553c7f986e0e71e04a680bd3d7d7955dfbbd24f76b31f2a7fd9385df125d06"' :
                                        'id="xs-injectables-links-module-AnimalsModule-e129c815a2f33326ec5f50f43849f85a172ecfaa7b60893cb23780c6d0c6cee550553c7f986e0e71e04a680bd3d7d7955dfbbd24f76b31f2a7fd9385df125d06"' }>
                                        <li class="link">
                                            <a href="injectables/AnimalsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnimalsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnotherModule.html" data-type="entity-link" >AnotherModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AnotherModule-056f1153b99817c56557171124c1b6540728ad5c9e6107fe4ad41dce5d50732fac910f6607a6fb4126ffb236b98ce2ce3b15e2535e2a2ed0c1c1f9e01d401be5"' : 'data-bs-target="#xs-controllers-links-module-AnotherModule-056f1153b99817c56557171124c1b6540728ad5c9e6107fe4ad41dce5d50732fac910f6607a6fb4126ffb236b98ce2ce3b15e2535e2a2ed0c1c1f9e01d401be5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AnotherModule-056f1153b99817c56557171124c1b6540728ad5c9e6107fe4ad41dce5d50732fac910f6607a6fb4126ffb236b98ce2ce3b15e2535e2a2ed0c1c1f9e01d401be5"' :
                                            'id="xs-controllers-links-module-AnotherModule-056f1153b99817c56557171124c1b6540728ad5c9e6107fe4ad41dce5d50732fac910f6607a6fb4126ffb236b98ce2ce3b15e2535e2a2ed0c1c1f9e01d401be5"' }>
                                            <li class="link">
                                                <a href="controllers/AnotherController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnotherController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AnotherModule-056f1153b99817c56557171124c1b6540728ad5c9e6107fe4ad41dce5d50732fac910f6607a6fb4126ffb236b98ce2ce3b15e2535e2a2ed0c1c1f9e01d401be5"' : 'data-bs-target="#xs-injectables-links-module-AnotherModule-056f1153b99817c56557171124c1b6540728ad5c9e6107fe4ad41dce5d50732fac910f6607a6fb4126ffb236b98ce2ce3b15e2535e2a2ed0c1c1f9e01d401be5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnotherModule-056f1153b99817c56557171124c1b6540728ad5c9e6107fe4ad41dce5d50732fac910f6607a6fb4126ffb236b98ce2ce3b15e2535e2a2ed0c1c1f9e01d401be5"' :
                                        'id="xs-injectables-links-module-AnotherModule-056f1153b99817c56557171124c1b6540728ad5c9e6107fe4ad41dce5d50732fac910f6607a6fb4126ffb236b98ce2ce3b15e2535e2a2ed0c1c1f9e01d401be5"' }>
                                        <li class="link">
                                            <a href="injectables/AnotherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnotherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-855990babfaf8a387c7c00bd9b9a5e7f2c89b37371437cc59fe363f98003a825be318ceebf98fae4534ba740cf0a4314823a8adce442a23988092e6506b266a3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-855990babfaf8a387c7c00bd9b9a5e7f2c89b37371437cc59fe363f98003a825be318ceebf98fae4534ba740cf0a4314823a8adce442a23988092e6506b266a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-855990babfaf8a387c7c00bd9b9a5e7f2c89b37371437cc59fe363f98003a825be318ceebf98fae4534ba740cf0a4314823a8adce442a23988092e6506b266a3"' :
                                            'id="xs-controllers-links-module-AppModule-855990babfaf8a387c7c00bd9b9a5e7f2c89b37371437cc59fe363f98003a825be318ceebf98fae4534ba740cf0a4314823a8adce442a23988092e6506b266a3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-855990babfaf8a387c7c00bd9b9a5e7f2c89b37371437cc59fe363f98003a825be318ceebf98fae4534ba740cf0a4314823a8adce442a23988092e6506b266a3"' : 'data-bs-target="#xs-injectables-links-module-AppModule-855990babfaf8a387c7c00bd9b9a5e7f2c89b37371437cc59fe363f98003a825be318ceebf98fae4534ba740cf0a4314823a8adce442a23988092e6506b266a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-855990babfaf8a387c7c00bd9b9a5e7f2c89b37371437cc59fe363f98003a825be318ceebf98fae4534ba740cf0a4314823a8adce442a23988092e6506b266a3"' :
                                        'id="xs-injectables-links-module-AppModule-855990babfaf8a387c7c00bd9b9a5e7f2c89b37371437cc59fe363f98003a825be318ceebf98fae4534ba740cf0a4314823a8adce442a23988092e6506b266a3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-dfd54f52ed5e9c4ffb2c6467e910de842a39af1496e6efc17e998d84229f6936972170750d116f840e58bf779dadd105a01d94e483bd3f02cbdfb84335b3445b"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-dfd54f52ed5e9c4ffb2c6467e910de842a39af1496e6efc17e998d84229f6936972170750d116f840e58bf779dadd105a01d94e483bd3f02cbdfb84335b3445b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-dfd54f52ed5e9c4ffb2c6467e910de842a39af1496e6efc17e998d84229f6936972170750d116f840e58bf779dadd105a01d94e483bd3f02cbdfb84335b3445b"' :
                                            'id="xs-controllers-links-module-PostsModule-dfd54f52ed5e9c4ffb2c6467e910de842a39af1496e6efc17e998d84229f6936972170750d116f840e58bf779dadd105a01d94e483bd3f02cbdfb84335b3445b"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-dfd54f52ed5e9c4ffb2c6467e910de842a39af1496e6efc17e998d84229f6936972170750d116f840e58bf779dadd105a01d94e483bd3f02cbdfb84335b3445b"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-dfd54f52ed5e9c4ffb2c6467e910de842a39af1496e6efc17e998d84229f6936972170750d116f840e58bf779dadd105a01d94e483bd3f02cbdfb84335b3445b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-dfd54f52ed5e9c4ffb2c6467e910de842a39af1496e6efc17e998d84229f6936972170750d116f840e58bf779dadd105a01d94e483bd3f02cbdfb84335b3445b"' :
                                        'id="xs-injectables-links-module-PostsModule-dfd54f52ed5e9c4ffb2c6467e910de842a39af1496e6efc17e998d84229f6936972170750d116f840e58bf779dadd105a01d94e483bd3f02cbdfb84335b3445b"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-917235b9f84ecf4cabf72b86955d481719f1b4eade495569ce786ad74625e77c9d436d9e9671771b24166983e5b341a1aa652c007559a116137da3015c2fdb5f"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-917235b9f84ecf4cabf72b86955d481719f1b4eade495569ce786ad74625e77c9d436d9e9671771b24166983e5b341a1aa652c007559a116137da3015c2fdb5f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-917235b9f84ecf4cabf72b86955d481719f1b4eade495569ce786ad74625e77c9d436d9e9671771b24166983e5b341a1aa652c007559a116137da3015c2fdb5f"' :
                                            'id="xs-controllers-links-module-UsersModule-917235b9f84ecf4cabf72b86955d481719f1b4eade495569ce786ad74625e77c9d436d9e9671771b24166983e5b341a1aa652c007559a116137da3015c2fdb5f"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-917235b9f84ecf4cabf72b86955d481719f1b4eade495569ce786ad74625e77c9d436d9e9671771b24166983e5b341a1aa652c007559a116137da3015c2fdb5f"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-917235b9f84ecf4cabf72b86955d481719f1b4eade495569ce786ad74625e77c9d436d9e9671771b24166983e5b341a1aa652c007559a116137da3015c2fdb5f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-917235b9f84ecf4cabf72b86955d481719f1b4eade495569ce786ad74625e77c9d436d9e9671771b24166983e5b341a1aa652c007559a116137da3015c2fdb5f"' :
                                        'id="xs-injectables-links-module-UsersModule-917235b9f84ecf4cabf72b86955d481719f1b4eade495569ce786ad74625e77c9d436d9e9671771b24166983e5b341a1aa652c007559a116137da3015c2fdb5f"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AdminController.html" data-type="entity-link" >AdminController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AnimalsController.html" data-type="entity-link" >AnimalsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AnotherController.html" data-type="entity-link" >AnotherController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Animal.html" data-type="entity-link" >Animal</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAnimalDto.html" data-type="entity-link" >CreateAnimalDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersQueryDto.html" data-type="entity-link" >GetUsersQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAnimalDto.html" data-type="entity-link" >UpdateAnimalDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnimalsService.html" data-type="entity-link" >AnimalsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnotherService.html" data-type="entity-link" >AnotherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
