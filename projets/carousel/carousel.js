
		let app1 = new Carousel("carousel-1",{
		    itemToScroll:1,
		    infiniteScroll:false,
		    itemVisible:1,

		})

		let app2 = new Carousel("carousel-2",{
		    itemToScroll:2,
		    infiniteScroll:false,
		    itemVisible:2
		})

		let app3 = new Carousel("carousel-3",{
		    itemToScroll:1,
		    infiniteScroll:true,
		    itemVisible:2
		})
		let app4 = new Carousel("carousel-4",{
		    itemToScroll:2,
		    infiniteScroll:true,
		    itemVisible:2

		})
		let app5 = new Carousel("carousel-5",{
		    itemToScroll:1,
		    infiniteScroll:true,
		    itemVisible:2,
		    autoCarousel :{
                on:true, // true or false
                direction:"left", // left or right or alternate
                time:2000 // left or right or alternate
            }

		})



		
	