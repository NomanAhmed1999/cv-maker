import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Templates = () => {
    const [cvImages, setCvImages] = useState([
        {
            id: 1,
            src: require('../../src/images/cv1.PNG'),
            isSelected: false,
            ready: true
        },
        {
            id: 2,
            src: 'https://www.coolfreecv.com/images/resume_template_bartender.jpg',
            isSelected: false,
            ready: false
        },
        {
            id: 3,
            src: 'https://www.dayjob.com/wp-content/uploads/2020/02/Premium-CV-template-2-1-page-version.jpg',
            isSelected: false,
            ready: false
        },
        {
            id: 4,
            src: 'https://app.resumekraft.com/assets/img/8.jpg',
            isSelected: false,
            ready: false
        },
        {
            id: 5,
            src: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/34698/image/6-graphicriver.jpg',
            isSelected: false,
            ready: false
        },
        {
            id: 6,
            src: 'https://img.freepik.com/free-vector/attractive-online-curriculum-template_23-2147820454.jpg?w=2000',
            isSelected: false,
            ready: false
        }
    ]);
    const [imgOpen, setImgOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState({
        src: require('../../src/images/cv1.PNG'),
        index: 1
    });

    useEffect(() => {
        changeImg(cvImages[0])
    }, [])


    const changeImg = (item) => {
        console.log("item", item);
        setSelectedImg({
            src: item.src,
            index: item.id,
            ready: item.ready
        });

    }


    return (
        <div className='templates-main-container'>
            <h2 className='blue-color'>Choose Template</h2>
            <div className='templates-theme-lg'>
                <img onClick={() => setImgOpen(!imgOpen)} className='templates-cv-img' src={selectedImg.src} />
                <Link to={`/form/${selectedImg.index}`} state={{ test: "hello" }}><Button disabled={!selectedImg.ready} variant="primary" className="mx-2 blue-bg-color next-btn">Next</Button></Link>
                {!selectedImg.ready
                    ?
                    <h1 className='soon-h'>Comming Soon</h1>
                    :
                    null
                }

            </div>
            {
                imgOpen === true ?
                    <div className='templates-theme-review style-3'>
                        <p className='cross-icon'> <i className="fa fa-times-circle" aria-hidden="true" onClick={() => setImgOpen(!imgOpen)}></i></p>
                        <img className='templates-cv-img-review' src={selectedImg.src} />
                    </div>
                    :
                    <div className='templates-theme-temp style-3'>
                        {cvImages.map((key, i) => {
                            return (
                                <div className='img-container' key={key.id}>
                                    <img className='templates-cv-sm' src={key.src} onClick={() => changeImg(key)} />
                                    {!key.ready ?
                                        <span className='soon-p'>Comming Soon</span>
                                        :
                                        null
                                    }
                                </div>
                            )
                        })}
                    </div>
            }

        </div >
    )
}

export default Templates;