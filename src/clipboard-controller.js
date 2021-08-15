import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ['copyable']

    copy(event) {
        this.selectCopyable()

        if (document.execCommand("copy")) {
            const event = new CustomEvent(`${this.identifier}:copied`)
            event.target?.dispatchEvent(event)
        }
    }

    selectCopyable() {
        const copyable = this.hasCopyableTarget
            ? this.copyableTarget
            : this.element
        copyable.select()
        copyable.selectionStart = 0
        copyable.selectionEnd = copyable.value.length
    }
}
