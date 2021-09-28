function buildUrl() {
    const site = document.querySelector("input[name='site']").value
    const source = document.querySelector("input[name='source']").value
    const channel = document.querySelector("input[name='channel']").value
    const campaingName = document.querySelector("input[name='campaing-name']").value
    const campaingKeyword = document.querySelector("input[name='campaign-keyword']").value
    const campaingContent = document.querySelector("input[name='campaign-content']").value

    if(site == ''){
        alert("site não informado!")
            document.querySelector("input[name='site']")
    } else if (source == '') {
        alert("Fonte da campanha não informado!")
            document.querySelector("input[name='source']")         
    } else if (channel == '') {
        alert("Referência da campanha não informada!")
            document.querySelector("input[name='channel']")        
    } else if (campaingName == '') {
        alert("Nome da campanha não informada!")
            document.querySelector("input[name='campaingName']")     
    } else if (campaingKeyword == '') {
        alert("Palavra chave não informada!")
            document.querySelector("input[name='campaingKeyword']")         
    } else if (campaingContent == '') {
        alert("Conteúdo da campanha não informado!")
            document.querySelector("input[name='campaingContent']")         
    } 
    else {
        const site = document.querySelector("input[name='site']").value
        const source = document.querySelector("input[name='source']").value
        const channel = document.querySelector("input[name='channel']").value
        const campaingName = document.querySelector("input[name='campaing-name']").value
        const campaingKeyword = document.querySelector("input[name='campaign-keyword']").value
        const campaingContent = document.querySelector("input[name='campaign-content']").value

        document.getElementById("result-copy").innerHTML = `https://www.${site}.com.br/?utm_source=${source}&utm_medium=${channel}&utm_campaign=${campaingName}&utm_term=${campaingKeyword}&utm_content=${campaingContent}`
        }
}


const copyUrl = () => {
        const copyText = document.querySelector("textarea").value;
        navigator.clipboard.writeText(copyText);
            alert("O texto foi copiado!");
            return copyUrl
}


