import React, {Component, PropTypes} from 'react';
import  {jsPDF} from 'jspdf';
import * as html2canvas from 'html2canvas';
import Template1 from '../Templates/Template1';
import Template2 from '../Templates/Template2';
import Template3 from '../Templates/Template3';
import styled, { css } from 'styled-components';

const options = [
  {
    label: "Template First",
    value: "template1",
  },
  {
    label: "Template Second",
    value: "template2",
  },
  {
    label: "Template Third",
    value: "template3",
  },
];

class ResumeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      template: "template1",
      temp:'',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log("Template Selected");
    this.setState({ template: e.target.value });
    this.setState({temp:e.target.value})

  }

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input,{
          width:1200,
          height:1500
        })
       
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 5, 2,300,390);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      };

render() {

   

    return (
        <div>
        <div className="select-container">
          <label>Plese select Template to design....</label>
          <select value={this.state.template} onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="mb5" className={{margin:'5px'}}>
          <button className="button" onClick={this.printDocument}> <span className="fa fa-download" ></span> Download</button>
        </div>
        <div id="divToPrint" className="mt4" {...css({
          backgroundColor: '#white',
          width: '210mm',
          minHeight: '330mm',
          marginLeft: '0',
          marginRight: 'auto'
        })}>
          
          {this.state.template ==="template1" ?
            (<div><Template1/></div>)          
          :(this.state.temp ==="template2" ? ( <div><Template2/></div>): ( <div><Template3/></div>))
          }
        
          
        </div>
      </div>);
}
}
export default ResumeComponent;