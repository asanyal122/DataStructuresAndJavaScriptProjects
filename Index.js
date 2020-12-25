let wordlist=[
    "apple",
    "orange",
    "app",
    "applet",
    "appolo",
    "bing",
    "google",
    "facebook",
    "yahoo"
];

let root=new TrieNode();


//add worsds in trie node
for(word of wordlist)
{
    addString(root,0,word);
}

let searchbar=document.getElementById("search_bar");
let list=document.getElementById("suggestion_list");

//handles the click event on suggestion list item
let handleClick=(clicked_item,str) => {
                        list.innerHTML="";
                        searchbar.value+=str;
                        searchbar.value+=" ";
                    };

let removeListSuccess=(clicked_item) => {
    clicked_item.classList.remove("list-group-item-success");
};

let makeListSuccess=(clicked_item) => {
    clicked_item.classList="list-group-item list-group-item-success";
};

searchbar.addEventListener("keyup",() => {
                                        //console.log("event emitted");
                                        //clear the suggestion list
                                        list.innerHTML="";

                                        //prefix typed last in the search box
                                        let prefix=searchbar.value.split(" ").pop();
                                        
                                        //will store the predictions
                                        let preds=[];
                                        
                                        if(prefix==="")
                                        {
                                            //null string no need to search
                                        }
                                        else
                                        {
                                            //search in the trie
                                            preds=search(root,0,prefix);
                                        }

                                        //console.log(preds);
                                        
                                        //insert all the predictions in the suggestion list
                                        for(pred of preds)
                                        {
                                            let val=pred.substring(prefix.length);
                                            list.innerHTML+=`<li class="list-group-item" onclick=handleClick(this,"${val}") onmouseover=makeListSuccess(this) onmouseout=removeListSuccess(this)>${pred}</li>`;
                                        }
                                    });