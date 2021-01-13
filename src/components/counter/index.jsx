//

function Counter({ counter, counterName }) {
  return (
    <div class="col-lg-3 col-md-6 col-sm-12">
      <div class="count-item decoration-bottom">
        <strong>{counter}</strong>
        <span>{counterName}</span>
      </div>
    </div>
  );
}

export default Counter;
