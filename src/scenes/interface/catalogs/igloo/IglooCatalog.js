import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive } from '@components/components'

import FloorButton from './buttons/FloorButton'
import UpgradeButton from './buttons/UpgradeButton'


export const preload = {
    key: 'igloocatalog-pack',
    url: 'assets/media/interface/catalogs/igloo/igloocatalog-pack.json',
    loadString: ['loading', 'igloocatalog']
}

/* START OF COMPILED CODE */

export default class IglooCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page10
        const page10 = scene.add.container(0, 0);
        page10.visible = false;
        this.add(page10);

        // p10
        const p10 = scene.add.image(0, 0, "igloocatalog", "page/page0010");
        p10.setOrigin(0, 0);
        page10.add(p10);

        // closeLeft
        const closeLeft = scene.add.image(491, 39, "igloocatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page10.add(closeLeft);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(492, 590, "igloocatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page10.add(pageLeft_1);

        // page9
        const page9 = scene.add.container(0, 0);
        page9.visible = false;
        this.add(page9);

        // p9
        const p9 = scene.add.image(0, 0, "igloocatalog", "page/page0009");
        p9.setOrigin(0, 0);
        page9.add(p9);

        // upgradeButton_10
        const upgradeButton_10 = new UpgradeButton(scene, 291, 536);
        page9.add(upgradeButton_10);

        // upgradeButton_11
        const upgradeButton_11 = new UpgradeButton(scene, 865, 532);
        page9.add(upgradeButton_11);

        // page8
        const page8 = scene.add.container(0, 0);
        page8.visible = false;
        this.add(page8);

        // p8
        const p8 = scene.add.image(0, 0, "igloocatalog", "page/page0008");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // upgradeButton_8
        const upgradeButton_8 = new UpgradeButton(scene, 291, 574);
        page8.add(upgradeButton_8);

        // upgradeButton_9
        const upgradeButton_9 = new UpgradeButton(scene, 862, 533);
        page8.add(upgradeButton_9);

        // page7
        const page7 = scene.add.container(0, 0);
        page7.visible = false;
        this.add(page7);

        // p7
        const p7 = scene.add.image(0, 0, "igloocatalog", "page/page0007");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // upgradeButton_6
        const upgradeButton_6 = new UpgradeButton(scene, 291, 533);
        page7.add(upgradeButton_6);

        // upgradeButton_7
        const upgradeButton_7 = new UpgradeButton(scene, 864, 533);
        page7.add(upgradeButton_7);

        // page6
        const page6 = scene.add.container(0, 0);
        page6.visible = false;
        this.add(page6);

        // p6
        const p6 = scene.add.image(0, 0, "igloocatalog", "page/page0006");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // upgradeButton_4
        const upgradeButton_4 = new UpgradeButton(scene, 292, 529);
        page6.add(upgradeButton_4);

        // upgradeButton_5
        const upgradeButton_5 = new UpgradeButton(scene, 864, 573);
        page6.add(upgradeButton_5);

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // p5
        const p5 = scene.add.image(0, 0, "igloocatalog", "page/page0005");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // upgradeButton_2
        const upgradeButton_2 = new UpgradeButton(scene, 291, 572);
        page5.add(upgradeButton_2);

        // upgradeButton_3
        const upgradeButton_3 = new UpgradeButton(scene, 866, 586);
        page5.add(upgradeButton_3);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // p4
        const p4 = scene.add.image(0, 0, "igloocatalog", "page/page0004");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // upgradeButton
        const upgradeButton = new UpgradeButton(scene, 298, 540);
        page4.add(upgradeButton);

        // upgradeButton_1
        const upgradeButton_1 = new UpgradeButton(scene, 866, 573);
        page4.add(upgradeButton_1);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // p3
        const p3 = scene.add.image(0, 0, "igloocatalog", "page/page0003");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // floorButton_3
        const floorButton_3 = new FloorButton(scene, 522, 178);
        page3.add(floorButton_3);

        // floorButton_3_1
        const floorButton_3_1 = new FloorButton(scene, 523, 359);
        page3.add(floorButton_3_1);

        // floorButton_3_2
        const floorButton_3_2 = new FloorButton(scene, 522, 529);
        page3.add(floorButton_3_2);

        // floorButton_3_3
        const floorButton_3_3 = new FloorButton(scene, 522, 699);
        page3.add(floorButton_3_3);

        // floorButton_3_4
        const floorButton_3_4 = new FloorButton(scene, 841, 660);
        floorButton_3_4.scaleX = 1;
        floorButton_3_4.scaleY = 1;
        page3.add(floorButton_3_4);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // p2
        const p2 = scene.add.image(0, 0, "igloocatalog", "page/page0002");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // floorButton
        const floorButton = new FloorButton(scene, 537, 436);
        page2.add(floorButton);

        // floorButton_1
        const floorButton_1 = new FloorButton(scene, 537, 661);
        page2.add(floorButton_1);

        // floorButton_2
        const floorButton_2 = new FloorButton(scene, 1100, 179);
        page2.add(floorButton_2);

        // floorButton_2_1
        const floorButton_2_1 = new FloorButton(scene, 1100, 354.4866943359375);
        page2.add(floorButton_2_1);

        // floorButton_2_2
        const floorButton_2_2 = new FloorButton(scene, 1100, 513);
        page2.add(floorButton_2_2);

        // floorButton_2_3
        const floorButton_2_3 = new FloorButton(scene, 1100, 687);
        page2.add(floorButton_2_3);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // p1
        const p1 = scene.add.image(0, 0, "igloocatalog", "page/page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = scene.add.image(468, 44, "igloocatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = scene.add.image(924, 39, "igloocatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1012, 0, "igloocatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1012, 549, "igloocatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 549, "igloocatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10];

        // block (components)
        new Interactive(block);

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "close_left";
        closeLeftButton.callback = () => this.close();
        closeLeftButton.pixelPerfect = true;

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "page_left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.activeFrame = false;
        pageLeft_1Button.pixelPerfect = true;

        // upgradeButton_10 (prefab fields)
        upgradeButton_10.igloo = 9;

        // upgradeButton_11 (prefab fields)
        upgradeButton_11.igloo = 6;

        // upgradeButton_8 (prefab fields)
        upgradeButton_8.igloo = 14;

        // upgradeButton_9 (prefab fields)
        upgradeButton_9.igloo = 2;

        // upgradeButton_6 (prefab fields)
        upgradeButton_6.igloo = 21;

        // upgradeButton_7 (prefab fields)
        upgradeButton_7.igloo = 1;

        // upgradeButton_4 (prefab fields)
        upgradeButton_4.igloo = 16;

        // upgradeButton_5 (prefab fields)
        upgradeButton_5.igloo = 13;

        // upgradeButton_2 (prefab fields)
        upgradeButton_2.igloo = 27;

        // upgradeButton_3 (prefab fields)
        upgradeButton_3.igloo = 26;

        // upgradeButton (prefab fields)
        upgradeButton.igloo = 20;

        // upgradeButton_1 (prefab fields)
        upgradeButton_1.igloo = 28;

        // floorButton_3 (prefab fields)
        floorButton_3.floor = 16;

        // floorButton_3_1 (prefab fields)
        floorButton_3_1.floor = 2;

        // floorButton_3_2 (prefab fields)
        floorButton_3_2.floor = 15;

        // floorButton_3_3 (prefab fields)
        floorButton_3_3.floor = 14;

        // floorButton_3_4 (prefab fields)
        floorButton_3_4.floor = 0;

        // floorButton (prefab fields)
        floorButton.floor = 19;

        // floorButton_1 (prefab fields)
        floorButton_1.floor = 8;

        // floorButton_2 (prefab fields)
        floorButton_2.floor = 18;

        // floorButton_2_1 (components)
        const floorButton_2_1Button = Button.getComponent(floorButton_2_1);
        floorButton_2_1Button.callback = () => this.interface.prompt.showFurniture(549);

        // floorButton_2_2 (prefab fields)
        floorButton_2_2.floor = 5;

        // floorButton_2_3 (prefab fields)
        floorButton_2_3.floor = 10;

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "page_front";
        pageFrontButton.callback = () => this.nextPage();
        pageFrontButton.activeFrame = false;

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "close_right";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "close_right";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "page_right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.activeFrame = false;
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "page_left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.activeFrame = false;
        pageLeftButton.pixelPerfect = true;

        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
