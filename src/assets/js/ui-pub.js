const UI = {
    init : function () {
        this.tooltips.init()
    },
    tooltips : {
        items: document.querySelectorAll("[data-tooltip]"),
        itemArray: [],
        init : function () {
            this.items.length > 0 ?
                this.dataCollection() :
                (console.log("toggle func none"), false)
        },
        dataCollection : function ( ){
            const _this = this;
            this.items.forEach((item) => {
                if(_this.itemArray.indexOf(item.dataset.tooltip) === -1){
                    _this.itemArray.push(item.dataset.tooltip)
                }
            })

        },
        events : function () {
            this.itemArray.forEach((item) => {
                item.addEventListener("mouseenter", () => item.classList.add("is-show") )
                item.addEventListener("mouseleave", () => item.classList.add("is-show") )
            })
        }
    }
}

UI.init()