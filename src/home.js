import React from 'react';
import './home.css';

export default () => {

    return (
        <>
            <div id="content1">
                <h2>ZADAREHAB IS AN INNOVATIVE PHYSICAL THERAPY AND WELLNESS CLINIC IN LAKEWOOD NJ</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus fugit molestiae, neque nihil vel,
                quod,
                incidunt ex repudiandae delectus voluptates dignissimos obcaecati impedit vitae sit maiores iure
                exercitationem
            unde.</h3>
            </div>
            <div id="content2">
            </div>

            <div id="photoGrid" className="container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>


            <div id="appointment">
                <p>START YOUR PATH TO WELLNESS</p>
                <button>REQUEST AN APPOINTMENT</button>
            </div>
            <div id="stuff">
                <div>
                    <h2>POSTS</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <div>
                    <h2>REVIEWS</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <div>
                    <h2>HOURS</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </>
    );
}