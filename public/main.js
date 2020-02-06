console.log("我是main.js")
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log("下载完成")       
            if (request.status >= 200 && request.status < 300) { 
                console.log('request response:')
                console.log(request.response)
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement("li")
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n = n + 1    
            }else {
                alert('加载分页失败')
            }
        } 
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log("下载完成")     
            if (request.status >= 200 && request.status < 300) { 
                console.log('request response:')
                console.log(request.response)
                const object = JSON.parse(request.response)
                myName.textContent=object.name
                console.log(object)    
            }else {
                alert('加载json失败')
            }
        } 
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        console.log('request readyState:')
        console.log(request.readyState)
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) { 
                console.log("下载完成")         
                console.log('request response:')
                console.log(request.responseXML)
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())    
            }else {
                alert('加载xml失败')
            }
        } 
    }
    request.send() //readyState=2
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        console.log('request readyState:')
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log("下载完成")
            if (request.status >= 200 && request.status < 300) {
                //创建div标签
                const div = document.createElement('div')
                //填写div的内容
                div.innerHTML = request.response
                //把div插到body
                document.body.appendChild(div)
            } else {
                alert('加载html失败')
            }
        }
    }
    request.send() //readyState=2
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => { 
        console.log('request readyState:')
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log("下载完成")
            if (request.status >= 200 && request.status < 300) {
                //创建script标签
                const script = document.createElement('script')
                //填写script的内容
                script.innerHTML = request.response
                //把div插到body
                document.body.appendChild(script)
            } else {
                alert('加载JS失败')
            }
        }
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => { 
        console.log('request readyState:')
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log("下载完成")
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //填写css的内容
                style.innerHTML = request.response
                //把css插到body
                document.body.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    request.send()
}
