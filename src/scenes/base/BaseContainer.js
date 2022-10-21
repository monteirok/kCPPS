export default class BaseContainer extends Phaser.GameObjects.Container {

    get crumbs() {
        return this.scene.crumbs
    }

    get network() {
        return this.scene.network
    }

    get soundManager() {
        return this.scene.soundManager
    }

    get interface() {
        return this.scene.interface
    }

    get world() {
        return this.scene.world
    }

    get ruffle() {
        return this.scene.ruffle
    }

    getString(...args) {
        return this.scene.getString(...args)
    }

    getFormatString(id, ...args) {
        return this.scene.getFormatString(id, ...args)
    }

    show() {
        this.visible = true
    }

    close() {
        this.visible = false
    }

}
