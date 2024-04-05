const UI = {
    init : function () {
        this.popup.init()
    },
    // 공통 함수
    activate : function ( elem ,className) {
        elem.classList.add(className)
    },
    inActivate : function ( elem ,className) {
        elem.classList.remove(className)
    },
    // 컴퍼넌트
    popup : {
        items : document.querySelectorAll("[data-popup]"),
        itemArray : [],
        init : function () {
            this.items.length > 0 ?
                this.dataCollection() :
                (console.log("popup func none"), false)
        },
        dataCollection : function () {
            const _this = this;
            this.items.forEach((item) => {
                if(_this.itemArray.indexOf(item.dataset.popup) === -1){
                    _this.itemArray.push(item.dataset.popup)
                }
            })
            this.itemArray.length > 0 ?
                this.events() : false
        },
        events : function () {
            this.itemArray.forEach((dataName) => {
                const popup = document.querySelector(`[data-popup=${dataName}]`)
                const open = document.querySelector(`[data-popup-open=${dataName}]`)
                const close = document.querySelector(`[data-popup-close=${dataName}]`)
                popup.addEventListener("click", (e) => {
                    console.log(e.target)
                    if(e.target.classList.contains("flex-wrap")) {
                        UI.inActivate(popup, "is-show")
                    }
                })
                open.addEventListener("click", () => UI.activate(popup, "is-show"))
                close.addEventListener("click", () => UI.inActivate(popup, "is-show"))
            })
        }
    }
}

UI.init()