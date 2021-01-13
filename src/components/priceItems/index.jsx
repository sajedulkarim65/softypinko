// Import Components
import Button from "../button";

function PriceItems({
  plans,
  planValue,
  planTime,
  benefit_1,
  benefit_2,
  supports,
}) {
  return (
    <div
      class="col-lg-4 col-md-6 col-sm-12"
      data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
    >
      <div class="pricing-item">
        <div class="pricing-header">
          <h3 class="pricing-title">{plans}</h3>
        </div>
        <div class="pricing-body">
          <div class="price-wrapper">
            <span class="currency">$</span>
            <span class="price">{planValue}</span>
            <span class="period">{planTime}</span>
          </div>
          <ul class="list">
            <li class="active">{benefit_1} GB space</li>
            <li class="active">{benefit_2} GB transfer</li>
            <li class="active">Pro Design Panel</li>
            <li>{supports}-minute support</li>
            <li>Unlimited Emails</li>
            <li>24/7 Security</li>
          </ul>
        </div>
        <Button btnName="Purchase Now" />
      </div>
    </div>
  );
}

export default PriceItems;
