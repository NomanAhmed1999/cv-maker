import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Form = () => {

    const [cvInfo, setCvInfo] = useState({})
    const location = useLocation()

    useEffect(() => {
        console.log("props", location.state.test);
    }, [])


    const ddData = [
        { text: "A4", value: "size-a4" },
        { text: "Letter", value: "size-letter" },
        { text: "Executive", value: "size-executive" }
    ];


    const [layoutSelection, setLayoutSelection] = useState({
        text: "A4",
        value: "size-a4"
    });



    const updatePageLayout = event => {
        setLayoutSelection(event.target.value);
    };


    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = event => {
        pdfExportComponent.current.save();
    };


    const openInNewTab = url => {
        console.log(url);
        window.open(url, '_blank', 'noopener,noreferrer');
    };








    const additemArr = (item, obj) => {
        if (item) {
            if (!cvInfo[`${item}`]) {
                setCvInfo({
                    ...cvInfo,
                    [`${item}`]: [obj]
                })
            } else {
                setCvInfo({ ...cvInfo, [`${item}`]: [...cvInfo[`${item}`], obj] });
            }
        }
        // else if (item === "skills") {
        //     let arr = {
        //         skill: ""
        //     };
        //     if (!cvInfo.skills) {
        //         setCvInfo({
        //             ...cvInfo,
        //             skills: [{ skill: "" }]
        //         })
        //     } else {
        //         setCvInfo({ ...cvInfo, skills: [...cvInfo.skills, arr] });
        //     }
        // } else if (item === "responsibility") {
        //     let arr = {responsibility: ""};
        //     if (!cvInfo.responsibilities) {
        //         setCvInfo({
        //             ...cvInfo,
        //             responsibilities: [{
        //                 responsibility: ""
        //             }]
        //         })
        //     } else {
        //         setCvInfo({ ...cvInfo, responsibilities: [...cvInfo.responsibilities, arr] });
        //     }
        // } else if (item === "certificate") {
        //     let arr = {
        //         certificate: ""
        //     };
        //     if (!cvInfo.certificates) {
        //         setCvInfo({
        //             ...cvInfo,
        //             certificates: [{
        //                 certificate: ""
        //             }]
        //         })
        //     } else {
        //         setCvInfo({ ...cvInfo, certificates: [...cvInfo.certificates, arr] });
        //     }
        // } else if (item === "work") {
        //     let arr = {
        //         work: ""
        //     };
        //     if (!cvInfo.works) {
        //         setCvInfo({
        //             ...cvInfo,
        //             works: [{
        //                 work: ""
        //             }]
        //         })
        //     } else {
        //         setCvInfo({ ...cvInfo, works: [...cvInfo.works, arr] });
        //     }
        // }
        // else {
        //     console.log("sds", cvInfo);

        // }

        console.log("sds", cvInfo);
    }

    const removeItemsArr = (item) => {

        console.log("array", cvInfo[`${item}`]);
        var rmItem = cvInfo[`${item}`];
        rmItem.pop();
        setCvInfo({ ...cvInfo, [cvInfo[`${item}`]]: rmItem })
        console.log("array", cvInfo[`${item}`]);
        // if (cvInfo[`${item}`]) {
        //     var array = [...cvInfo[`${item}`]];
        //     setCvInfo(() => { array.splice(cvInfo[`${item}`].length - 1, 1) });
        //     setCvInfo({ [`${item}`]: array });
        //     console.log("cv", cvInfo);
        // }

        //     if (item === "educations" && cvInfo.educations) {
        //         var array = [...cvInfo.educations];
        //         array.splice(cvInfo.educations.length - 1, 1);
        //         setCvInfo({ [`${item}`]: array });
        //     } else if (item === "skills" && cvInfo.skills) {
        //         var array = [...cvInfo.skills];
        //         array.splice(cvInfo.skills.length - 1, 1);
        //         setCvInfo({ skills: array });
        //     } else if (item === "responsibility" && cvInfo.responsibilities) {
        //         var array = [...cvInfo.responsibilities];
        //         array.splice(cvInfo.responsibilities.length - 1, 1);
        //         setCvInfo({ responsibilities: array });

        //     } else if (item === "certificate" && cvInfo.certificates) {
        //         var array = [...cvInfo.certificates];
        //         array.splice(cvInfo.certificates.length - 1, 1);
        //         setCvInfo({ certificates: array });
        //     } else if (item === "work" && cvInfo.works) {
        //         var array = [...cvInfo.works];
        //         array.splice(cvInfo.works.length - 1, 1);
        //         setCvInfo({ works: array });
        //     } else {
        //         console.log("cv", cvInfo);
        //     }
        // }
    }


    const handleInputsChange = (e, i, item) => {
        let data = [...cvInfo[`${item}`]];
        data[i][e.target.name] = e.target.value;
        setCvInfo({ ...cvInfo, item: data });
    }

    return (
        <div className='form-container'>

            {/* CV SIDE */}
            <div className='form-box1 style-3'>
                <div className='cv-container style-3'>


                    <PDFExport ref={pdfExportComponent}>
                        <div className={`pdf-page ${layoutSelection.value}`}>

                            <div className='cv-header'>
                                <div className='left-row mt-4'>
                                    <h2>{cvInfo.firstName ? cvInfo.firstName : "Abdullah"} {cvInfo.lastName ? cvInfo.lastName : "Ahmed"}</h2>
                                    <p>{cvInfo.profession ? cvInfo.profession : "Web Developer"}</p>
                                </div>
                                <div className='right-row mt-4'>
                                    <p><span>Address: </span>{cvInfo.address ? cvInfo.address : "Near Imtiaz Shoping Mall Nazimabad, Karachi, Pakistan"}</p>
                                    <p><span>Email: </span>{cvInfo.email ? cvInfo.email : "abdullah@gmail.com"}</p>
                                    <p><span>Phone: </span>{cvInfo.phoneNumber ? cvInfo.phoneNumber : "03125453465"}</p>
                                </div>
                            </div>
                            <div className='cv-body'>
                                <h3>Skills Heighlights</h3><hr />
                                <ul>
                                    {
                                        cvInfo.skills ?
                                            cvInfo.skills.map((key, i) => {
                                                return (
                                                    <li key={i}>{key.skill}</li>
                                                )
                                            })
                                            :
                                            <div>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>saas</li>
                                                <li>javaScript</li>
                                            </div>
                                    }
                                </ul>
                                <h3>Objective</h3><hr />
                                <p>{cvInfo.objective ? cvInfo.objective : "Seeking a position as a Web Developer with Innovation utilizing exceptional skills, and abilities and experiences gained through relevant education and projects to contribute to the ongoing success of the company."}</p>

                                <h3>Work Responsibility</h3><hr />
                                <ul style={{ maxHeight: "150px" }}>
                                    {
                                        cvInfo.responsibilities ?
                                            cvInfo.responsibilities.map((key, i) => {
                                                return (
                                                    <li key={i}>{key.responsibility}</li>
                                                )
                                            })
                                            :
                                            <div>
                                                <li>Ability to translate design into functional web apps using HTML5, React, Vue js.</li>
                                                <li>Work with development delivering teams and project managers to ideate solutions.</li>
                                            </div>
                                    }
                                </ul>
                                <h3>Education</h3><hr />
                                {
                                    cvInfo.education ?
                                        cvInfo.education.map((key, i) => {
                                            return (
                                                <p key={i}><span className='edu-h'>{key.degree}: </span> <span className='edu-field'>{key.field} - {key.year} - </span><span className='clg'>{key.collage}</span></p>
                                            )
                                        })
                                        :
                                        <div>
                                            <p><span className='edu-h'>Matriculation </span> <span className='edu-field'>Computer Science - 2018 - </span><span className='clg'>MH-Grammar School</span></p>
                                            <p><span className='edu-h'>Entermidiate </span> <span className='edu-field'>Computer Science - 2020 - </span><span className='clg'>Govt.Degree Collage Karachi.</span></p>
                                        </div>
                                }

                                <h3>Deplomas/Certificates</h3><hr />
                                <ul>
                                    {
                                        cvInfo.certificates ?
                                            cvInfo.certificates.map((key, i) => {
                                                return (
                                                    <li key={i}>{key.certificate}</li>
                                                )
                                            })
                                            :
                                            <div>
                                                <li>MERN Stack Developer By SMIT</li>
                                            </div>
                                    }
                                </ul>
                                <h3>My Work</h3><hr />
                                <ul>
                                    {
                                        cvInfo.works ?
                                            cvInfo.works.map((key, i) => {
                                                return (
                                                    <li key={i}><a onClick={() => openInNewTab(`https://${key.work}`)} style={{ 'color': 'blue', 'cursor': 'pointer', width: '100%' }}>{key.work}</a></li>

                                                )
                                            })
                                            :
                                            <div>
                                                <li><a onClick={() => openInNewTab('https://google.com')} style={{ 'color': 'blue', 'cursor': 'pointer' }}>www.google.com</a></li>

                                            </div>
                                    }
                                </ul>



                            </div>
                        </div>
                    </PDFExport>



                </div>
            </div>

            {/* FORM SIDE */}
            <div className='form-box2 style-3'>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" placeholder="First name" onChange={e => { setCvInfo({ ...cvInfo, firstName: e.target.value }); }} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" placeholder="Last name" onChange={e => { setCvInfo({ ...cvInfo, lastName: e.target.value }); }} />
                        </div>
                    </div>
                    <input type="profession" className="form-control mt-3" placeholder="Profession" onChange={e => { setCvInfo({ ...cvInfo, profession: e.target.value }); }} />
                    <input type="email" className="form-control mt-3" placeholder="Enter email" onChange={e => { setCvInfo({ ...cvInfo, email: e.target.value }); }} />
                    <input type="phoneNumber" className="form-control mt-3" placeholder="Phone number" onChange={e => { setCvInfo({ ...cvInfo, phoneNumber: e.target.value }); }} />
                    <input type="address" className="form-control mt-3" placeholder="Address" onChange={e => { setCvInfo({ ...cvInfo, address: e.target.value }); }} />
                    <textarea type="objective" className="form-control mt-3" placeholder="Objective" rows="4" cols="50" onChange={e => { setCvInfo({ ...cvInfo, objective: e.target.value }); }}></textarea>



                    <div className='item-arr-container'>
                        <div className='item-arr mt-3'>
                            <i className="fa fa-plus" onClick={() => { additemArr("skills", [{ skill: "" }]) }}></i>
                            <p>Skills</p>
                            <i className="fa fa-minus" onClick={() => { removeItemsArr("skills") }}></i>
                        </div>
                        <div className='item-arr-inputs-con style-3'>
                            {
                                cvInfo.skills ?
                                    cvInfo.skills.map((key, i) => {
                                        return (
                                            <div className='item-arr-inputs-skill' key={key + i}>
                                                <input type="text" className="form-control m-3" value={key.skills} placeholder={`skill ${i + 1}`} name='skill' onChange={(e) => handleInputsChange(e, i, "skills")} />
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            }

                        </div>
                    </div>


                    <div className='item-arr-container'>
                        <div className='item-arr mt-3'>
                            <i className="fa fa-plus" onClick={() => { additemArr("responsibilities", [{ responsibility: "" }]) }}></i>
                            <p>Responsibilities</p>
                            <i className="fa fa-minus" onClick={() => { removeItemsArr("responsibilities") }}></i>
                        </div>
                        <div className='item-arr-inputs-con style-3'>
                            {
                                cvInfo.responsibilities ?
                                    cvInfo.responsibilities.map((key, i) => {
                                        return (
                                            <div className='item-arr-inputs-skill' key={key + i}>
                                                <input type="text" className="form-control m-3" value={key.responsibilit} placeholder={`Responsibility ${i + 1}`} name='responsibility' onChange={(e) => handleInputsChange(e, i, "responsibilities")} />
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            }

                        </div>
                    </div>

                    <div className='item-arr-container'>
                        <div className='item-arr mt-3'>
                            <i className="fa fa-plus" onClick={() => { additemArr("education", { degree: "", field: "", year: "", collage: "" }) }}></i>
                            <p>Education</p>
                            <i className="fa fa-minus" onClick={() => removeItemsArr("education")}></i>
                        </div>
                        <div className='item-arr-inputs-con style-3'>
                            {
                                cvInfo.education ?
                                    cvInfo.education.map((key, i) => {
                                        return (
                                            <div className='item-arr-inputs' key={key + i}>
                                                <input type="text" className="form-control-sm m-2" value={key.degree} placeholder="Degree" name='degree' onChange={(e) => handleInputsChange(e, i, "education")} />
                                                <input type="text" className="form-control-sm m-2" placeholder="Field" name='field' value={key.field} onChange={(e) => handleInputsChange(e, i, "education")} />
                                                <input type="text" className="form-control-sm m-2" placeholder="Year" name='year' onChange={(e) => handleInputsChange(e, i, "education")} />
                                                <input type="text" className="form-control-sm m-2" placeholder="Collage" name='collage' onChange={(e) => handleInputsChange(e, i, "education")} />
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            }

                        </div>
                    </div>


                    <div className='item-arr-container'>
                        <div className='item-arr mt-3'>
                            <i className="fa fa-plus" onClick={() => { additemArr("certificates", [{ certificate: "" }]) }}></i>
                            <p>Certificates</p>
                            <i className="fa fa-minus" onClick={() => { removeItemsArr("certificates") }}></i>
                        </div>
                        <div className='item-arr-inputs-con style-3'>
                            {
                                cvInfo.certificates ?
                                    cvInfo.certificates.map((key, i) => {
                                        return (
                                            <div className='item-arr-inputs-skill' key={key + i}>
                                                <input type="text" className="form-control m-3" value={key.certificate} placeholder={`Certificate ${i + 1}`} name='certificate' onChange={(e) => handleInputsChange(e, i, "certificates")} />
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            }

                        </div>
                    </div>


                    <div className='item-arr-container'>
                        <div className='item-arr mt-3'>
                            <i className="fa fa-plus" onClick={() => { additemArr("works", [{ work: "" }]) }}></i>
                            <p>See My Work</p>
                            <i className="fa fa-minus" onClick={() => { removeItemsArr("works") }}></i>
                        </div>
                        <div className='item-arr-inputs-con style-3'>
                            {
                                cvInfo.works ?
                                    cvInfo.works.map((key, i) => {
                                        return (
                                            <div className='item-arr-inputs-skill' key={key + i}>
                                                <input type="text" className="form-control m-3" value={key.work} placeholder="Link only" name='work' onChange={(e) => handleInputsChange(e, i, "works")} />
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            }

                        </div>
                    </div>

                    {/* <div className='mt-2 color-pur dropdown-style'>
                        <p>Select a Page Size</p>
                        <DropDownList
                            className='dropdown-style'
                            data={ddData}
                            textField="text"
                            dataItemKey="value"
                            value={layoutSelection}
                            onChange={updatePageLayout}
                        />
                    </div> */}

                    <div className='mt-3'>
                        <Button variant="primary" onClick={handleExportWithComponent}>
                            Download
                        </Button>
                    </div>

                    {/* <Link to="/cv-view" state={{ cvInfo }}><Button variant="primary" className="mx-2 mt-5 blue-bg-color">NEXT</Button></Link> */}
                </div>
            </div>
        </div>
    )
}


export default Form;