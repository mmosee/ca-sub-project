import phoneInputClickEvent from '../assets/js/func.js'
import axios from "axios"

const home = () => {
    return (
        `<div class="content">
            <div class="control-wrap">
                <button type="button" class="btn bg-primary btn-round" onclick={{ console.log("ssdsd")}}>PUBLISH</button>
                <button type="button" class="btn bg-primary btn-round">SAVE</button>
                <button type="button" class="btn bg-success btn-round">VALIDATE</button>
                <button type="button" class="btn bg-info btn-round">STOP</button>
            </div>
            <div class="msg-wrap">       
                <div class="msg-wrap-inner flex-wrap ai-st ju-sb">
                    <div class="column">
                        <div class="title-wrap">
                            <h2 class="title">메세지 확인</h2>
                        </div>
                        <!-- PHONE WRAP : START -->
                        <div class="phone-wrap">
                            <div class="phone">
                                <div class="data-info">
                                    <span id="getMessageType">SMS</span>
                                </div>
                                <div class="outer-btns">
                                    <span class="left-btn-01"></span>
                                    <span class="left-btn-02"></span>
                                    <span class="left-btn-03"></span>
                                    <span class="right-btn"></span>
                                </div>
                                <div class="phone-head">
                                    <div class="status-bar">
                                        <i class="icon icon-wifi"></i>
                                        <i class="icon icon-bluetooth"></i>
                                        <i class="icon icon-lte"></i>
                                        <i class="icon icon-lte-signal"></i>
                                        <i class="icon icon-battery"></i>
                                        <span class="camera"></span>
                                    </div>
                                </div>
                                <div class="phone-body">
                                    <div class="chat-wrap">
                                        <div class="chat" >
                                            <div class="msg">
                                                <p data-view-content></p>
                                            </div>
                                        </div>
                                    </div>
    <!--                                <div class="notification-wrap is-ani">SMS</div>-->
                                </div>
                                <div class="phone-foot"></div>
                            </div>
                        </div>
                        <!-- //PHONE WRAP : END -->  
                    </div>
                    <div class="column">
                        <div class="title-wrap">
                            <h2 class="title">메세지 선택</h2>
                        </div>
                        <div class="box">
                            <fieldset class="selet-field">
                                <label for="nfms"></label>
                                <select id="nfms" data-select="talk-select">
                                    <option value="">선택</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <button type="button" onClick={{ phoneInputClickEvent }}>적용</button>
                            </fieldset>    
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>`
    )
}

export default home