export default function UserInput({ onChangeValue, inputByUser }) {
  // const [userInput, setUserInput] = useState({
  //   initialInvestment: 10000,
  //   annualInvestment: 1200,
  //   expectedReturn: 6,
  //   duration: 10,
  // });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            required
            value={inputByUser.initialInvestment}
            onChange={(event) =>
              onChangeValue("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            required
            value={inputByUser.annualInvestment}
            onChange={(event) =>
              onChangeValue("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            value={inputByUser.expectedReturn}
            onChange={(event) =>
              onChangeValue("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            required
            value={inputByUser.duration}
            onChange={(event) => onChangeValue("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
