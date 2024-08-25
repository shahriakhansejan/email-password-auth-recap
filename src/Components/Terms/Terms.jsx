import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div className="bg-white max-h-full">
            <p>
            These Terms of Service reflect the way Google’s business works, the laws that apply to our company, and certain things we’ve always believed to be true. As a result, these Terms of Service help define Google’s relationship with you as you interact with our services. For example, these terms include the following topic headings:
            </p>
<ol>
    <li className="flex items-center gap-1"> <RiCheckboxCircleFill className="text-green-500"></RiCheckboxCircleFill>What you can expect from us, which describes how we provide and develop our services</li>
    <li className="flex items-center gap-1"> <RiCheckboxCircleFill className="text-green-500"></RiCheckboxCircleFill>What we expect from you, which establishes certain rules for using our services</li>
    <li className="flex items-center gap-2"> <RiCheckboxCircleFill className="text-green-500"></RiCheckboxCircleFill>Content in Google services, which describes the intellectual property rights to the content you find in our services — whether that content belongs to you, Google, or others</li>
    <li className="flex items-center gap-2"> <RiCheckboxCircleFill className="text-green-500"></RiCheckboxCircleFill>In case of problems or disagreements, which describes other legal rights you have, and what to expect in case someone violates these terms</li>
    <li className="flex items-center gap-2"> <RiCheckboxCircleFill className="text-green-500"></RiCheckboxCircleFill>Understanding these terms is important because, by accessing or using our services, you’re agreeing to these terms.</li>

</ol>
<p>
Besides these terms, we also publish a Privacy Policy. Although it’s not part of these terms, we encourage you to read it to better understand how you can update, manage, export, and delete your information
</p>    
<Link to="/register"><button className="btn btn-primary">Back to Register</button></Link>        
        </div>
    );
};

Terms.propTypes = {
    
};

export default Terms;