import React from 'react';
import Title from '../../Header/Title/Title';

const Blog = () => {
    return (
        <div className='container'>
            <Title title="Blog"></Title>
            <h1 className='text-center text-danger fst-italic'>Here Your All Blogs</h1>
            <div className='row g-2'>
                <div className="col-md-5 mx-auto">
                    <h1 className='text-danger fw-bold fs-4'>1.Difference between javascript and nodejs</h1>
                    <p>Answer: Javascript is a programming language which runs on browser enginge , like in chrome they use the chrome v8 engine for run javscript . In other hand NodeJs is a interpreter or a running environment for javascript. Nodejs also help to run the javascript code outside the browser. And Javascript mostly used to build only client site of an application and node js used to build the server site of an application.</p>

                </div>
                <div className="col-md-5 mx-auto">
                    <h1 className='text-danger fw-bold fs-4'>2.When should you use nodejs and when should you use mongodb</h1>
                    <p>Answer: MongoDb and Nodejs are two things from the two different parts. As I can say, Nodejs is a server side programming language and Mongodb is database system which helps you to store your data and can run some queries over the data. So you can use both together in your application. Except nodejs you can use python, java etc for your mongodb database.</p>

                </div>
                <div className="col-md-5 mx-auto">
                    <h1 className='text-danger fw-bold fs-4'>3.Differences between sql and nosql databases.</h1>
                    <p>Answer: There are two types of databse system one is SQl and another is NOsql. Sql means structure query language. And NosQl means No Structure query language. So in sql data are stored in table and a structed way and in sql yoy have to run our data operation in a structured way using sql language and maintain their rules. But in Nosql there are no tabular format to store the data. The data are stored in JSON format and running a operation over your data you dont have to follow any special criteria that is the benifit of Nosql.</p>

                </div>
                <div className="col-md-5 mx-auto">
                    <h1 className='text-danger fw-bold fs-4'>4.What is the purpose of jwt and how does it work</h1>
                    <p>Answer: JWT means javscript web token. The purpose of using Jwt in application is for the server and data security. Because if we dont use the JWT token anyone from anywhere can get the access to our databse and stole our databse information that is very unsecured. So for the security purpose of a website we are using the JWT in our website.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;