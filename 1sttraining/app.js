!(function(document){
    //all code well go here
    var itemClassName = 'carousel-photo',
    items =document.getElementsByClassName(itemClassName),
    totalItems =  items.length,
    slide = 0 ,
    moving = true;
    //set classes
    function setInitialClasses(){
        // targets the provious, current , and  next items 
        //this  assumes there are at e leas t theree items;
        itmes[totalItems-1].classlist.add('prev');
        items[0].classList.add('active');
        items[1].classList.add('next');
    }
    // set event listners
    function setEventListeners(){
        var next = document.getElementsByClassName('right-arr'),
            prev = document.getElementsByClassName('left-arr');
            next.addEventListener('click', moveNext);
            prev.addEventListener('click', movePrev);
    // nex navigetion handelr
    function moveNext(){
        //check if moving
        if(!moving){
            //if it is the last slide reset to 0 else +1
            if(slide === (totalItems -1)){
                slide=0;
            }else{
                slide++;
            }
            //move the carousel to updated slide
            moveCarouselTo(slide);
        }
        }
        // previous navigton handelr
        function movePrev(){
            //check if moveing 
            if(!moving){
                // if it's the first slide set as last slide else -1
                if(slide===0){
                    slide = (totalItems -1);
                }else{
                    slide--
                }
                // move carousel to pupdate sllide
                moveCarouselTo(slide);
            }
        }
    }

    function disabelInteraction(){
        //set 'moveign' ot true fro the saem durtion as our transition
        //(0.5s = 500ms)
        moving =true;

                // setTimeout runs its function once after the given time
        setTimeout(function(){
            moving = false
        }, 500);  
    }

    function moveCarouselTo(slide){
        //check if carousel is  moveign if not allow interaction 
        if(!moving){
            //temporartily disabel anteractivty
            disabelInteraction();
            //update the old adjacent slide with new mnes
            var
        }
    }
}(document));