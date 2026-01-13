        let star = document.getElementById('star')
        let check = confirm('춘식이조입니까?')

        if (check==true){
            alert('환영합니다')
        }


        star.addEventListener('click',()=>{
            console.log('이벤트 테스트')
        })
        let csk = document.getElementById("csk")
        let cs = document.getElementById('cs')
        cs.addEventListener('click',()=>{
            console.log('춘식이')
            csk.innerHTML += "<br>춘식이 귀여워</br>"
        })
       