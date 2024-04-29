/**
 *author: [Carlos Awo]
 *e-mail:awocarlos@gmail.com
 *version: 1.0.0
 *website: awocarlos.com
 */

class Carousel {
 /********/
    root = null
    header = null
    body = null
    footer = null
    items =  null
    totalItems= null
    buttons= null
    itemToScrollMax = null
    ITEM_TO_SCROLL_MIN = 1 /**Static Constant*/
    itemVisibleMax = null
    ITEM_VISIBLE_MIN = 1   /**Static Constant*/
    actualItems = []
    itemsInView =[]
    actualItemsPos = 0
    /**Actions Buttons*/
    next = null
    prev = null
    options ={}
 /*****/


    constructor(
        elementID = null , 
        options={},
        driveMode="JS" ){
     /**Check options*/

        if(elementID===null ){
             throw new Error("Element ID has not be given")   
        }
        this.options = Object.assign({},{
            itemToScroll : 1,
            itemVisible : 1,
            infiniteScroll : false, /**Booleen*/
            autoCarousel :{
                on:false, // true or false
                direction:"left", // left or right or alternate
                time:1000 // left or right or alternate
            }
        }, options)
        this.root = document.getElementById(elementID)
        this.header = this.root.querySelector(".carousel__header")
        this.body = this.root.querySelector(".carousel__body")
        this.footer = this.root.querySelector(".carousel__footer")

        this.items =  Array.from(this.body.children)
             /***here*/
        this.totalItems= this.items.length
        this.itemToScrollMax = this.totalItems - 1
        this.itemVisibleMax = this.totalItems
     //***here
        if (this.totalItems==0) {
            console.log("No items")
            return "No items"
        }


        
        while (this.body.lastElementChild) {
            //debugger
          this.body.removeChild(this.body.lastElementChild);
        }
        this.items =  this.items.map((item)=>{
            let carousel__item = this.createElementWithSelector("div",".carousel__item")
            carousel__item.appendChild(item)
            this.body.appendChild(carousel__item)
            return carousel__item

        })
        if(this.totalItems==1){
            this.actualItems.push(this.items[this.actualItemsPos])
            this.addClassToElement(this.actualItems)
            console.log("one item")
            return "one"
        }


        //checking options value
        if(this.options.itemToScroll<=this.ITEM_TO_SCROLL_MIN||this.options.itemToScroll>this.itemToScrollMax){
          this.options.itemToScroll=1
        }
        if(this.options.itemVisible<=this.ITEM_VISIBLE_MIN||this.options.itemVisible>this.itemVisibleMax){
          this.options.itemVisible=1
        }
     /***/

        this.itemsInView = this.setAllItemsInView(this.items,this.options.itemToScroll,this.options.itemVisible)
        console.log(JSON.stringify(this.itemsInView))
        while(this.test(this.itemsInView[this.itemsInView.length-1],this.itemsInView[this.itemsInView.length-2 ])){
                this.itemsInView.pop()
        }
            console.log(JSON.stringify(this.itemsInView))

        this.actualItems = this.itemsInView[this.actualItemsPos]
        this.addClassToElement(this.actualItems)

        if(this.options.autoCarousel.on){
		    	this.autoCarousel(this.options.autoCarousel.time)
		    	return
        }

        this.createNavigation()
    }

    autoCarousel(time){
			setInterval(()=>{
				this.moveToNextItem();
			} ,time)
    }

    /**
		 *Recupere l'(les )item suivant(s) et le(s) place dans le slide
		 *
		 */
    moveToNextItem(){    console.log("Next")
        this.actualItemsPos = this.actualItemsPos+1
        if (this.actualItemsPos > this.itemsInView.length-1) {
            //alert("dernuer")
            if (!this.options.infiniteScroll) {
                this.actualItemsPos = this.actualItemsPos-1
                return
            }
            this.actualItemsPos=0
        }
        this.removeClassFromElement(this.actualItems)
        this.actualItems = []

        this.actualItems = this.itemsInView[this.actualItemsPos]
        this.addClassToElement(this.actualItems)
    }
    /**
 *Recupere l'(les )item precedent(s) et le(s) place dans le slide
 *
 */
    moveToPreviousItem (){ console.log("Prev")
        this.actualItemsPos = this.actualItemsPos-1
        if (this.actualItemsPos < 0) {
            if (!this.options.infiniteScroll) {
                    this.actualItemsPos = this.actualItemsPos+1
                return
            }
            this.actualItemsPos=this.itemsInView.length-1
        }
        this.removeClassFromElement(this.actualItems)
        this.actualItems = []

        this.actualItems = this.itemsInView[this.actualItemsPos]
        this.addClassToElement(this.actualItems)
    }

    /**
 *Retire une classe a un element
 *@param {Array} element 
 *@param {String} classToRemove 
 */
    removeClassFromElement(element){
   element.forEach((item)=>{
    item.classList.remove("carousel__item--visible")
   })
    }
    /**
 *Ajoute une classe a un element
 *@param {Array} element 
 *@param {String} classToAdd 
 */
    addClassToElement(element){
   element.forEach((item)=>{
        if(!item.classList.contains("carousel__item--visible")){
            item.classList.add("carousel__item--visible")
        }    
   })
    }
    /**
 *test si tous les element du premier tableau sont deja present 
 *dans le premier tableau
 *@param {array}- tab1
 *@param {array}- tab2
 *@return {booleen}- true si le test est evalue a true 
 *      et false dans le cas contraire 
 */
    test(tab1 , tab2){
    let result = true
    tab1.forEach((i)=>{
        if(!tab2.includes(i)){
            result = false
        }
    })
    return result
    }
    /**
 *Definir tous les items a scroller
 */
    setAllItemsInView(tab,itemToScroll,itemVisible){
    let result = []
    let aux = []
    let pos = 0
    let actualItemsPos = 0

    while(1){
        //alert(actualItemsPos)
        let pos = actualItemsPos
        for(let i = 0; i<=itemVisible-1 ; i++){
            if(pos > tab.length-1){
                break
            }

            aux.push(tab[pos])
           // aux.push(pos)
            pos++
        }

        if(aux.length==0){
            //alert("fin")
            break
        }

        result.push(aux)
        aux = []
        actualItemsPos= actualItemsPos+itemToScroll
        console.log(result)
        
    }

    return result
    }
    /*
 *Create next button and prev button and attach an eventlister to them
 */
    createNavigation(){
        this.buttons = this.createElementWithSelector("div", ".carousel__actions")
        this.next = this.createElementWithSelector("div", ".carousel__next")
        this.prev = this.createElementWithSelector("div", ".carousel__prev")

        this.next.addEventListener("click",(e)=>{
           e.stopPropagation()
           this.moveToNextItem()
        })
        this.prev.addEventListener("click",(e)=>{
           e.stopPropagation()
          this.moveToPreviousItem()
        })
        this.buttons.appendChild(this.prev)
        this.buttons.appendChild(this.next)

        this.body.appendChild(this.buttons)
        console.log(this.buttons)
    }
    /**
     *Cree un element Html
     *@param --tag--{string} -le type d'element qu'on souhaite cree(tag=div)
     *@param --selector--{string} -le selecteur a attribue a l'element(selector=.)
     *@return {HTMLelement} -le selecteur a attribue a l'element
     *
     */
    createElementWithSelector(/**String*/ tag ,/**String*/ selector ){
        let element = document.createElement(tag)
        if(selector){
            if (selector[0] === "#") {
                selector = selector.slice(1)
                element.id = selector
            } 
            else {
                selector = selector.slice(1)
                element.classList.add(selector)
            }
        }

        return element
    }
}







