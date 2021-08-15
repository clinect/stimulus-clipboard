import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ['copyable']

    copy(event) {
        this.selectCopyable()

        if (document.execCommand("copy")) {
            event.target?.dispatchEvent(new CustomEvent(`${this.identifier}:copied`))
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
