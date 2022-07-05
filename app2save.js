 //divs and appendages
            const box1 = document.createElement("div");
            box1.classList.add("box1")
            const box2 = document.createElement("div");
            box2.classList.add("box2")
            
            const box3 = document.createElement("div");
            box3.classList.add("box3")
            const box4 = document.createElement("div");
            box4.classList.add("box4")
            
            const box5 = document.createElement("div");
            box5.classList.add("box5")
            const box6 = document.createElement("div");
            box6.classList.add("box6")
            
            document.body.append(box1)
            document.body.append(box2)            
            document.body.append(box3)
            document.body.append(box4)
            document.body.append(box5)
            document.body.append(box6)

//scene 1
            const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 250 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			box1.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 6;
//scene 2
            const scene2 = new THREE.Scene();
			const camera2 = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
			

            const renderer2 = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			box2.appendChild( renderer2.domElement );

			const geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
			const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube2 = new THREE.Mesh( geometry2, material2 );
			scene2.add( cube2 );

            camera2.position.z = 6;
//scene 3            
            const scene3 = new THREE.Scene();
			const camera3 = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
			

            const renderer3 = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			box3.appendChild( renderer3.domElement );

			const geometry3 = new THREE.BoxGeometry( 1, 1, 1 );
			const material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube3 = new THREE.Mesh( geometry3, material3 );
			scene3.add( cube3 );

            camera3.position.z = 6;

//scene 4
            const scene4 = new THREE.Scene();
			const camera4 = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
			

            const renderer4 = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			box4.appendChild( renderer4.domElement );

			const geometry4 = new THREE.BoxGeometry( 1, 1, 1 );
			const material4 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube4 = new THREE.Mesh( geometry4, material4 );
			scene4.add( cube4 );

            camera4.position.z = 6;
//scene 5
            const scene5 = new THREE.Scene();
			const camera5 = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
			

            const renderer5 = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			box5.appendChild( renderer5.domElement );

			const geometry5 = new THREE.BoxGeometry( 1, 1, 1 );
			const material5 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube5 = new THREE.Mesh( geometry5, material5 );
			scene5.add( cube5 );

            camera5.position.z = 6;

//scene 6
            const scene6 = new THREE.Scene();
			const camera6 = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
			

            const renderer6 = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			box6.appendChild( renderer6.domElement );

			const geometry6 = new THREE.BoxGeometry( 1, 1, 1 );
			const material6 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube6 = new THREE.Mesh( geometry6, material6 );
			scene6.add( cube6 );

            camera6.position.z = 6;

//rendering the scenes + rotations

            function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

                cube2.rotation.x += 0.03
                cube2.rotation.y += 0.03;

                cube3.rotation.x += 0.03
                cube3.rotation.y += 0.03;

                cube4.rotation.x += 0.03
                cube4.rotation.y += 0.03;

                cube5.rotation.x += 0.03
                cube5.rotation.y += 0.03;

                cube6.rotation.x += 0.03
                cube6.rotation.y += 0.03;

				renderer.render( scene, camera );
                renderer2.render(scene2, camera2);
                renderer3.render( scene3, camera3 );
                renderer4.render(scene4, camera4);
                renderer5.render( scene5, camera5 );
                renderer6.render(scene6, camera6);
			};

//call the animation
    animate();