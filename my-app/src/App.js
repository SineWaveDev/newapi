
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import a CSS file for styling

const App = () => {
  const [financialYear, setFinancialYear] = useState('');
  const [otherIncome, setOtherIncome] = useState('0');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Individual');
  const [filingDate, setFilingDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [region, setRegion] = useState('');
  const [gender, setGender] = useState('');
  const [residentStatus, setResidentStatus] = useState('');
  const [basicsalary, setbasicsalary] = useState('0');
  const [houseproperty, sethouseproperty] = useState('0');
  const [business_profession, setbusiness_profession] = useState('0');
  const [othersource, setothersource] = useState('0');
  const [grosstotalincome, setgrosstotalincome] = useState('0');
  const [deductionunderchaptervip, setdeductionunderchaptervip] = useState('0');
  const [totalIncome, setTotalIncome] = useState('0');
  const [agriculturalIncome, setAgriculturalIncome] = useState('0');
  const [incomeTaxNormal, setIncomeTaxNormal] = useState('0');
  const [incomeTaxSpecial, setIncomeTaxSpecial] = useState('0');
  const [taxWithoutSurcharge, setTaxWithoutSurcharge] = useState('0');
  const [lessRebate87A, setLessRebate87A] = useState('0');
  const [surcharge, setSurcharge] = useState('0');
  const [educationCess, setEducationCess] = useState('0');
  const [taxPayable, setTaxPayable] = useState('0');
  const [tds, setTDS] = useState('0');
  const [advanceTax1stInst, setAdvanceTax1stInst] = useState('0');
  const [advanceTax2ndInst, setAdvanceTax2ndInst] = useState('0');
  const [advanceTax3rdInst, setAdvanceTax3rdInst] = useState('0');
  const [advanceTax4thInst, setAdvanceTax4thInst] = useState('0');
  const [ShortTerm11, setShortTerm11] = useState('0');
  const [ShortTerm12, setShortTerm12] = useState('0');
  const [ShortTerm13, setShortTerm13] = useState('0');
  const [ShortTerm14, setShortTerm14] = useState('0');
  const [ShortTerm15, setShortTerm15] = useState('0');
  const [ShortTerm16, setShortTerm16] = useState('0');
  const [ShortTerm21, setShortTerm21] = useState('0');
  const [ShortTerm22, setShortTerm22] = useState('0');
  const [ShortTerm23, setShortTerm23] = useState('0');
  const [ShortTerm24, setShortTerm24] = useState('0');
  const [ShortTerm25, setShortTerm25] = useState('0');
  const [ShortTerm26, setShortTerm26] = useState('0');
  const [ShortTerm31, setShortTerm31] = useState('0');
  const [ShortTerm32, setShortTerm32] = useState('0');
  const [ShortTerm33, setShortTerm33] = useState('0');
  const [ShortTerm34, setShortTerm34] = useState('0');
  const [ShortTerm35, setShortTerm35] = useState('0');
  const [ShortTerm36, setShortTerm36] = useState('0');
  const [ShortTerm41, setShortTerm41] = useState('0');
  const [ShortTerm42, setShortTerm42] = useState('0');
  const [ShortTerm43, setShortTerm43] = useState('0');
  const [ShortTerm44, setShortTerm44] = useState('0');
  const [ShortTerm45, setShortTerm45] = useState('0');
  const [ShortTerm46, setShortTerm46] = useState('0');
  const [ShortTerm51, setShortTerm51] = useState('0');
  const [ShortTerm52, setShortTerm52] = useState('0');
  const [ShortTerm53, setShortTerm53] = useState('0');
  const [ShortTerm54, setShortTerm54] = useState('0');
  const [ShortTerm55, setShortTerm55] = useState('0');
  const [ShortTerm56, setShortTerm56] = useState('0');
  const [Total1, setTotal1] = useState('');
  const [Total2, setTotal2] = useState('');
  const [Total3, setTotal3] = useState('');
  const [Total4, setTotal4] = useState('');
  const [Total5, setTotal5] = useState('');
  const [Total6, setTotal6] = useState('');
  const [balancePayable, setBalancePayable] = useState('');
  const [output, setOutput] = useState('');
  const [total, setTotal] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/calculate-tax/', {
        financial_year: financialYear,
        other_income: otherIncome,
        basic_salary: basicsalary,
        rent_received: houseproperty,
        hra: houseproperty,
        Business_Profession: business_profession,
        Gross_Total_Income: grosstotalincome,
        ltcg_112A_10: Total4,
        stcg_15: total,
        ltcg_20: Total6,
      });

      setOutput(response.data);
    } catch (error) {
      console.error(error);
      setOutput('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    setTotal(parseInt(ShortTerm11) + parseInt(ShortTerm21) + parseInt(ShortTerm31) + parseInt(ShortTerm41) + parseInt(ShortTerm51));
  }, [ShortTerm11, ShortTerm21, ShortTerm31, ShortTerm41, ShortTerm51]);

  useEffect(() => {
    setTotal2(parseInt(ShortTerm12) + parseInt(ShortTerm22) + parseInt(ShortTerm32) + parseInt(ShortTerm42) + parseInt(ShortTerm52));
  }, [ShortTerm12, ShortTerm22, ShortTerm32, ShortTerm42, ShortTerm52]);

  useEffect(() => {
    setTotal3(parseInt(ShortTerm13) + parseInt(ShortTerm23) + parseInt(ShortTerm33) + parseInt(ShortTerm43) + parseInt(ShortTerm53));
  }, [ShortTerm13, ShortTerm23, ShortTerm33, ShortTerm43, ShortTerm53]);

  useEffect(() => {
    setTotal4(parseInt(ShortTerm14) + parseInt(ShortTerm24) + parseInt(ShortTerm34) + parseInt(ShortTerm44) + parseInt(ShortTerm54));
  }, [ShortTerm14, ShortTerm24, ShortTerm34, ShortTerm44, ShortTerm54]);

  useEffect(() => {
    setTotal5(parseInt(ShortTerm15) + parseInt(ShortTerm25) + parseInt(ShortTerm35) + parseInt(ShortTerm45) + parseInt(ShortTerm55));
  }, [ShortTerm15, ShortTerm25, ShortTerm35, ShortTerm45, ShortTerm55]);

  useEffect(() => {
    setTotal6(parseInt(ShortTerm16) + parseInt(ShortTerm26) + parseInt(ShortTerm36) + parseInt(ShortTerm46) + parseInt(ShortTerm56));
  }, [ShortTerm16, ShortTerm26, ShortTerm36, ShortTerm46, ShortTerm56]);
  return (
    <div className="app">
      <h1>Tax Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <div className="HTML_Part_2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="HTML_Part_2">
            <label htmlFor="region">Regime:</label>
            <input
              type="text"
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
          {/* <div className="dates">
            <label htmlFor="region">Regime:</label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="Old">Old</option>
              <option value="New">New</option>
            </select>
          </div> */}
          <div className="HTML_Part_2">
            <label htmlFor="financialYear">Financial Year:</label>
            <input
              type="text"
              id="financialYear"
              value={financialYear}
              onChange={(e) => setFinancialYear(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group-1">
          <div className="dates">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="dates">
            <label htmlFor="filingDate">Filing Date:</label>
            <input
              type="date"
              id="filingDate"
              value={filingDate}
              onChange={(e) => setFilingDate(e.target.value)}
            />
          </div>
          <div className="dates">
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="dates">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="dates">
            <label htmlFor="residentStatus">Resident Status:</label>
            <select
              id="residentStatus"
              value={residentStatus}
              onChange={(e) => setResidentStatus(e.target.value)}
            >
              <option value="resident">Resident</option>
              <option value="non-resident">Non-Resident</option>
              <option value="nri">NRI</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="basicsalary">Salary:</label>
            <input
              type="number"
              id="basicsalary"
              value={basicsalary}
              onChange={(e) => setbasicsalary(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="incomeTaxNormal">Income Tax Normal:</label>
            <input
              type="number"
              id="incomeTaxNormal"
              value={output.tax_on_total_income}
              onChange={(e) => setIncomeTaxNormal(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="houseproperty">House Property:</label>
            <input
              type="number"
              id="houseproperty"
              value={houseproperty}
              onChange={(e) => sethouseproperty(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="incomeTaxSpecial">Income Tax Special:</label>
            <input
              type="number"
              id="incomeTaxSpecial"
              value={incomeTaxSpecial}
              onChange={(e) => setIncomeTaxSpecial(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="business_profession">Business/Profession:</label>
            <input
              type="number"
              id="business_profession"
              value={business_profession}
              onChange={(e) => setbusiness_profession(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taxWithoutSurcharge">Tax Without Surchargee:</label>
            <input
              type="number"
              id="taxWithoutSurcharge"
              value={taxWithoutSurcharge}
              onChange={(e) => setTaxWithoutSurcharge(e.target.value)}
            />
          </div>
        </div>

        <table cellPadding="1" cellSpacing="1">
          <thead>
            <tr>
              <th></th>
              <th colSpan={3} style={{ fontSize: '15px' }}>Short term</th>
              <th colSpan={3} style={{ fontSize: '15px' }}>Long Term</th>
            </tr>
            <tr>
              <th></th>
              <th>111A-15%</th>
              <th>111A-10%</th>
              <th>Others-Slab Rate</th>
              <th>112A-10%</th>
              <th>Others-10%</th>
              <th>Others-20%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>15/6</th>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm11"
                      value={ShortTerm11}
                      onChange={(e) => setShortTerm11(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm12"
                      value={ShortTerm12}
                      onChange={(e) => setShortTerm12(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm13"
                      value={ShortTerm13}
                      onChange={(e) => setShortTerm13(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm14"
                      value={ShortTerm14}
                      onChange={(e) => setShortTerm14(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm15"
                      value={ShortTerm15}
                      onChange={(e) => setShortTerm15(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm16"
                      value={ShortTerm16}
                      onChange={(e) => setShortTerm16(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="HTML_Part">
                  <label htmlFor="lessRebate87A">less Rebate 87A:</label>
                  <input
                    type="number"
                    id="lessRebate87A"
                    value={lessRebate87A}
                    onChange={(e) => setLessRebate87A(e.target.value)}
                  />

                </div>
              </td>
            </tr>
            <tr>


              <th>15/9</th>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm21"
                      value={ShortTerm21}
                      onChange={(e) => setShortTerm21(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm22"
                      value={ShortTerm22}
                      onChange={(e) => setShortTerm22(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm23"
                      value={ShortTerm23}
                      onChange={(e) => setShortTerm23(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm24"
                      value={ShortTerm24}
                      onChange={(e) => setShortTerm24(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm25"
                      value={ShortTerm25}
                      onChange={(e) => setShortTerm25(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm26"
                      value={ShortTerm26}
                      onChange={(e) => setShortTerm26(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="HTML_Part">

                  <label htmlFor="surcharge">surcharge:</label>
                  <input
                    type="number"
                    id="surcharge"
                    value={output.surcharge}
                    onChange={(e) => setSurcharge(e.target.value)}
                  />
                </div>

              </td>
            </tr>
            <tr>
              <th>15/12</th>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm31"
                      value={ShortTerm31}
                      onChange={(e) => setShortTerm31(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm32"
                      value={ShortTerm32}
                      onChange={(e) => setShortTerm32(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm33"
                      value={ShortTerm33}
                      onChange={(e) => setShortTerm33(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm34"
                      value={ShortTerm34}
                      onChange={(e) => setShortTerm34(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm35"
                      value={ShortTerm35}
                      onChange={(e) => setShortTerm35(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm36"
                      value={ShortTerm36}
                      onChange={(e) => setShortTerm36(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="HTML_Part">

                  <label htmlFor="educationCess">education Cess:</label>
                  <input
                    type="number"
                    id="educationCess"
                    value={output.health_and_education_cess}
                    onChange={(e) => setEducationCess(e.target.value)}
                  />
                </div>

              </td>
            </tr>
            <tr>
              <th>15/3</th>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm41"
                      value={ShortTerm41}
                      onChange={(e) => setShortTerm41(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm42"
                      value={ShortTerm42}
                      onChange={(e) => setShortTerm42(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm43"
                      value={ShortTerm43}
                      onChange={(e) => setShortTerm43(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm44"
                      value={ShortTerm44}
                      onChange={(e) => setShortTerm44(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm45"
                      value={ShortTerm45}
                      onChange={(e) => setShortTerm45(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm46"
                      value={ShortTerm46}
                      onChange={(e) => setShortTerm46(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="HTML_Part">

                  <label htmlFor="taxPayable">tax Payable:</label>
                  <input
                    type="number"
                    id="taxPayable"
                    value={output.total_tax_payable}
                    onChange={(e) => setTaxPayable(e.target.value)}
                  />

                </div>
              </td>
            </tr>
            <tr>
              <th>31/3</th>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm51"
                      value={ShortTerm51}
                      onChange={(e) => setShortTerm51(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm52"
                      value={ShortTerm52}
                      onChange={(e) => setShortTerm52(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm53"
                      value={ShortTerm53}
                      onChange={(e) => setShortTerm53(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm54"
                      value={ShortTerm54}
                      onChange={(e) => setShortTerm54(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm55"
                      value={ShortTerm55}
                      onChange={(e) => setShortTerm55(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="ShortTerm56"
                      value={ShortTerm56}
                      onChange={(e) => setShortTerm56(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="HTML_Part">

                  <label htmlFor="tds">TDS:</label>
                  <input
                    type="number"
                    id="tds"
                    value={tds}
                    onChange={(e) => setTDS(e.target.value)}
                  />
                </div>

              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="Total1"
                      value={total}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="Total2"
                      value={Total2}
                      onChange={(e) => setTotal2(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="Total3"
                      value={Total3}
                      onChange={(e) => setTotal3(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="Total4"
                      value={Total4}
                      onChange={(e) => setTotal4(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="Total5"
                      value={Total5}
                      onChange={(e) => setTotal5(e.target.value)}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="">
                  <div className="">
                    <input
                      type="number"
                      id="Total6"
                      value={Total6}
                      onChange={(e) => setTotal6(e.target.value)}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="otherIncome">Other Income:</label>
            <input
              type="number"
              id="otherIncome"
              value={otherIncome}
              onChange={(e) => setOtherIncome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="advanceTax1stInst">Advance Tax 1st Inst:</label>
            <input
              type="number"
              id="advanceTax1stInst"
              value={advanceTax1stInst}
              onChange={(e) => setAdvanceTax1stInst(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="grosstotalincome">Gross Total Income:</label>
            <input
              type="number"
              id="grosstotalincome"
              value={output.gross_taxable_income}
              onChange={(e) => setgrosstotalincome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="advanceTax2ndInst">Advance Tax 2nd Inst:</label>
            <input
              type="number"
              id="advanceTax2ndInst"
              value={advanceTax2ndInst}
              onChange={(e) => setAdvanceTax2ndInst(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="deductionunderchaptervip">Deduction Under Chapter VIA:</label>
            <input
              type="number"
              id="deductionunderchaptervip"
              value={output.total_deductions_under_chapter_vi_a}
              onChange={(e) => setdeductionunderchaptervip(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="advanceTax3rdInst">Advance Tax 3rd Inst:</label>
            <input
              type="number"
              id="advanceTax3rdInst"
              value={advanceTax3rdInst}
              onChange={(e) => setAdvanceTax3rdInst(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="totalIncome">Total Income:</label>
            <input
              type="number"
              id="totalIncome"
              value={output.tax_on_total_income}
              onChange={(e) => setTotalIncome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="advanceTax4thInst">Advance Tax 4th Inst:</label>
            <input
              type="number"
              id="advanceTax4thInst"
              value={advanceTax4thInst}
              onChange={(e) => setAdvanceTax4thInst(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="agriculturalIncome">Agricultural Income:</label>
            <input
              type="number"
              id="agriculturalIncome"
              value={agriculturalIncome}
              onChange={(e) => setAgriculturalIncome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="balancePayable">Balance Payable:</label>
            <input
              type="number"
              id="balancePayable"
              value={balancePayable}
              onChange={(e) => setBalancePayable(e.target.value)}
            />
          </div>
        </div>



        {/* <button type="submit">Calculate</button> */}
        <button type="submit" class="submit-button">Calculate</button>
      </form>
      {/* {
        output && (<div className="output">Gross Taxable Income: {output.gross_taxable_income}
          <p>Tax On Total Income: {output.tax_on_total_income}</p>
          <p>Surcharge: {output.surcharge}</p>
          <p>Health and Education Cess: {output.health_and_education_cess}</p>
        </div>
        )
      } */}
    </div >
  );
};

export default App;



