import React from 'react';


const LetterStyle = React.createClass({
  render: function(){
    const colorArray = []
    React.Children.forEach(this.props.children, (child, i) => {
        for (var i=0; i<child.length; i++){
          //console.log(child[i] + ' at index: ' + i)
          React.Children.map(child[i], function(content, i){
            if (content !== " "){
              React.cloneElement(content, {
                  style.color = "#4bc4fb"
              })

              console.log(content)
            }

          });
          //child[i].style.color : "#4bc4fb"
        }
        //console.log(child + ' at index: ' + i);
      })

    return (
      <h1 className="lead" ref="lead">
        {this.props.children}

      </h1>
    );
  }

})







export default LetterStyle;
