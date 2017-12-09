# Dynamic Forms
I needed a way to show/hide certain elements (and groups of elements) of a form and rather than write a whole load of Javascript that is super specific to my use case I thought I would create a pretty basic library that allows me to keep everything generic. I'm keeping the library dependancy free and as simple as possible with just a single JS file.

## Installation
- Download the `dynamic-forms.js` file from this repository
- Copy the file into your project directory somewhere
- Include the file in your HTML file, for example:
```html
<script src="dynamic-forms.js"></script>
```

## Usage
This library requires three points to work:
- An element with a class that you want to show based on a form field
- A `data-df-target` attribute. This goes on the form field you want to be in control of whether the target element is shown or hidden
- A `data-df-value` attribute. This also goes on the form field you want to be in control. If the value of this form field matches this attribute then the target will be shown, otherwise it will be hidden

## Examples
Here are a few more examples to give you inspiration

### Basic Implementation
This is about as basic as it gets, if the value of the input is `blue` then the `.colourAlert` div is displayed.
```html
<input type="text" name="favouriteColour" data-df-target="colourAlert" data-df-value="blue">

<div class="colourAlert">
    That's a great colour!
</div>
```

### Radio buttons & Checkboxes
With radio buttons and checkboxes it is a similar usage to other input types but you have to place the Dynamic Forms attributes on all inputs as per this example.
```html
<label>
    Would you like to join our newsletter?
    <input type="radio" name="newsletter" value="1" data-df-target="newsletterAlert" data-df-value="1"> Yes
    <input type="radio" name="newsletter" value="0" data-df-target="newsletterAlert" data-df-value="1"> No
</label>
<div class="newsletterAlert">
    If you ever want to unsubscribe, just visit your settings page or a previous email.
</div>
```

### Form "Validation"
Whilst not built for form validation this library does enable you to provide some crude form of form validation if you are only looking for a simple implementation. 

```html
<label>
    How many people will be attending?
    <input type="number" id="headcount" name="headcount" data-df-target="headcountWarning" data-df-value="1">
</label>
<div class="headcontWarning">
    Sorry we only accept bookings for parties of 2 or more
</div>
```

### Nested Dynamic Forms
It is possible to nest dynamic forms within each other without changing anything, see the example below.
```html
 <label>
    How would you like to pay?
    <input type="radio" name="payment" value="paypal" data-df-target="paymentChoice" data-df-value="visa"> PayPal (This will redirect you to the PayPal website)
    <input type="radio" name="payment" value="visa" data-df-target="paymentChoice" data-df-value="visa"> Visa
</label>

<div class="paymentChoice">

    You have chosen to pay by Visa. Please fill in your card details below.

    <label>
        Card Number
        <input type="text" name="card-no">
    </label>

    <label>
        Billing Address
        <textarea name="billing-address" rows="5"></textarea>
    </label>

    <label>
        Delivery Address same as Billing?
        <input type="radio" name="delivery-billing-match" value="1" data-df-target="deliveryDetails" data-df-value="0"> Yes
        <input type="radio" name="delivery-billing-match" value="0" data-df-target="deliveryDetails" data-df-value="0"> No
    </label>

    <div class="deliveryDetails">

        <label>
            Delivery Address
            <textarea name="delivery-address" rows="5"></textarea>
        </label>

    </div>

</div>
```

## To Do
- Allow regex in the `data-df-value` field
- Provide option for using `keydown` event rather than `change` event
- Create NPM package

My plan is to create an NPM package that will handle the installation of this library at some point, but for now this will do.

## Contributing
This library is in very early days and is very basic and untested at the moment. If you wish to contribute in any way feel free to create issues or pull requests and I'll try and keep on top of it.