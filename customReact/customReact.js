// function renderElement(reactElement, container){
//     const newElement = document.createElement(reactElement.type)
//     newElement.innerHTML = reactElement.children;
//     newElement.setAttribute("href", reactElement.props.href);
//     newElement.setAttribute("target", reactElement.props.target);
//     mainContainer.appendChild(newElement)
// }  

function renderElement(reactElement, container){
    const newElement = document.createElement(reactElement.type)
    newElement.innerHTML = reactElement.children;
    newElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        newElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(newElement)


   for (const prop in reactElement.props) {
   
    if (Object.hasOwnProperty.call(reactElement.props, prop)) {
        const element = reactElement.props[prop];
        console.log(prop,":", element)
    }
   }
}


const reactElement = {
    type : 'a',
    props : {
        href: "https://google.com",
        target : "_blank"
    },
    children : "Click here to visit to the google."
}




const mainContainer = document.getElementById("root");

renderElement(reactElement, mainContainer );