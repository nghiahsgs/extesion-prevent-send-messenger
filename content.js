console.log("Bấm shift left để bật chế độ chat mà ko gửi tin nhắn đi,")
console.log('Đây là bản thử nghiệm, mk ko chấp nhận pháp lý nếu bạn ko gửi đc tin nhắn quan trọng hoặc gửi nhầm tin nhắn')

document.addEventListener('keydown',e=>{
    if (e.code ==='ShiftLeft'){
        console.log("document listening")
        const ip_element = document.querySelectorAll('div[role="presentation"]')[document.querySelectorAll('div[role="presentation"]').length - 1]
        console.log(ip_element)
        ip_element.addEventListener('keydown', e => {
            //console.log(e.code)
            if (e.code === 'Enter') {
                let text_msg = ip_element.innerText
                console.log(text_msg)
                insert_text_2_chatbox(text_msg)
            }
        })    
    }
    
})


function insert_text_2_chatbox(msg) {
    const div_test = document.createElement('div')
    div_test.className = '_5wd4 _1nc6'
    div_test.innerHTML = `<div class="._1dlq _h8t"><div class="_5wd9 direction_ltr clearfix" data-tooltip-content="4:27 AM" data-hover="tooltip" data-tooltip-position="right" id="js_fq"><div class="_1e-x _n4o"><div class="_3_bl"><div class="_3_bp"></div><div class="_5w1r _3_om _5wdf" style="max-width: 164px; overflow-wrap: inherit;"><div class="_4gx_"><div class="_1aa6"><div class=""><span class="_5yl5"><span>${msg}</span></span></div></div></div></div></div><span class="_40fu" data-hover="none"><span class="_1z_2 _2u_d"><span class="_8sow"><button data-tooltip-content="React" data-hover="tooltip" data-tooltip-position="above" data-tooltip-alignh="center" class="_8sop _5zvq" tabindex="-1" aria-label="React" data-testid="react_to_message_button"><i alt="" class="img sp_OzXfMioWn3- sx_8e5ac5"></i></button></span><span class="_8sow"><button data-tooltip-content="More" data-hover="tooltip" data-tooltip-position="above" data-tooltip-alignh="center" class="_8sop _2rvp" tabindex="-1" aria-label="More"><i alt="" class="img sp_1xGvg2WAnAI sx_f2dd75"></i></button></span></span></span></div></div></div><div class="_40qi"></div>`
    document.querySelectorAll('.fbNubFlyoutOuter div[style="overscroll-behavior: contain;"]')[1].appendChild(div_test)
    document.querySelectorAll('.fbNubFlyoutOuter div[style="overscroll-behavior: contain;"]')[1].scrollBy(0, 200)    
}
