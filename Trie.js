class TrieNode{
    constructor()
    {
        this.next={};
        this.isLeaf=false;
        this.words=[];
    }

    
}

function addString(root,i,str)
    {
        if(i===str.length)
        {
            root.isLeaf=true;
            return;
        }

        if(!root.next[str[i]])
        {
            root.next[str[i]]=new TrieNode();
        }

        root.words.push(str);

        addString(root.next[str[i]],i+1,str);
        
        return;
    }


 function search(root,i,str)
    {
        if(i===str.length)
        {
            return root.words;
        }

        if(!root.next[str[i]])
        {
            return [];
        }

        return search(root.next[str[i]],i+1,str);
    }


    // let wordlist=[
    //     "apple",
    //     "orange",
    //     "app",
    //     "applet",
    //     "appolo",
    // ];
    
    // let root=new TrieNode();
    
    // for(word of wordlist)
    // {
    //     addString(root,0,word);
    // }


    // console.log(search(root,0,"a"));