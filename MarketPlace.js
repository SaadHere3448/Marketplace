document.getElementById("search-button").addEventListener('click' , function () {
    const searchId = document.getElementById("search-input")
    const documents = document.querySelectorAll('.cards')

    documents.forEach(doc => doc.classList.add("hidden"))

    const targetDocument = document.getElementById(searchId)
    console.log(targetDocument);
    
    if (targetDocument){
        targetDocument.classList.remove('hidden')
    } else{
        alert("No such document found!!")
    }
})