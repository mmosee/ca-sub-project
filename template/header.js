import logo from '/public/kakaotalk-svgrepo-com.svg'

const header = () => {
    return (
        `<div class="inner">
            <span class="logo">
                <img src=${logo} />
            </span>
            <h1 class="title">카카오톡 메시지 서비스 <span class="sub-title">v0.1</spaa></h1>
        </div>`
    )

}

export default header