import React from "react";
// Gatsby seems to hijack all <a> tags and, if they do not begin with http://
// or https://, appends the path to the domain instead of setting the URL as
// expected.

/**
 * The [linkElements] will contains a list of (some) keywords
 * that will be found in common URLs.
 */
const linkElements = ["http", "twitch", "www", ".ca", ".com"]

/**
 * This function is used to check if the given parameter will
 * contains any hyper-text link or not.
 * It uses the list of keywords defined above as a matching rules,
 * on successful match, a parameter value is transformed 
 * into an HTML anchor (<a></a>) tag and returned back.
 * @param {String} param - string to check
 * @returns {Any} returns either a new <a> tag or the param as it is.
 */
export const checkLink = (param) => {
    if (!param.includes(" ") && linkElements.some(e => param.includes(e))) {
        if (param.includes("@")){
            // create and return new clickable mailto link (if contact is an email)
        return <a href={"mailto:" + param} target="_blank" rel="noreferrer">{param}</a>;
        }            
        else if (!param.includes("http")) {
            // add protocol type (if not available)
            param = "http://" + param
        }
        // create and return new clickable link
        return <a href={param} target="_blank" rel="noreferrer">{param}</a>;
    } else {
        return param; // not a link
    }
};
