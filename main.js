const webview = document.createElement(`iframe`);
webview.src = `https://azareeljames.github.io/SearchEngine-Internet-Viewer/`;
webview.classList = `webview`;
var input;
document.body.appendChild(webview);

const search = document.createElement(`button`);
search.classList = `search`;
search.title = `search`;
search.textContent = `Search`; 

function Search(){
    if (confirm(`Search or type URL? (click "no" if you want to type URL)`)){
        input = 
        prompt(`Search (Leave a blank to cancel or type "\\b" to back or type "\\r" to redo)`);
        if (input === `\\b`){
            try{
                webview.contentWindow.history.back();
                return
            }
            catch{
                alert(`Cannot back from the page`);
                return
            }
        }
        else if (input === `\\r`){
            try{
                webview.contentWindow.history.forward();
                return
            }
            catch{
                alert(`Cannot redo from the page`);
                return
            }
        }
        if (input){
            webview.src = `https://www.bing.com/search?q=${input}`;
        }
    }
    else{
        input =
        prompt(`Search (Leave a blank to cancel or make sure there's with https://)`);
        if (input){
            webview.src = input;
        }
    }
}

search.onclick = Search;

document.body.appendChild(search);
