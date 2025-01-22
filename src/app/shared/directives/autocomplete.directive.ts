import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

declare const google: any;
@Directive({
  selector: '[appAutocomplete]',
  standalone: true
})
export class AutocompleteDirective implements OnInit, OnDestroy {

  @Input() country: string = 'AM';  // Default to Armenia, can be customized by passing the country code
  private autocomplete: any;
  private addressField: HTMLInputElement;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.addressField = this.el.nativeElement;
    this.initAutocomplete();
  }

  ngOnDestroy(): void {
    if (this.autocomplete) {
      google.maps.event.clearInstanceListeners(this.autocomplete);
    }
  }

  private initAutocomplete() {
    const options = {
      componentRestrictions: { country: this.country },
      fields: ['address_components', 'geometry'],
      types: ['(cities)'],
    };

    this.autocomplete = new google.maps.places.Autocomplete(this.addressField, options);
    this.addressField.focus();

    this.autocomplete.addListener('place_changed', () => this.fillInAddress());
  }

  private fillInAddress() {
    const place = this.autocomplete.getPlace();
    if (place && place.address_components) {

      console.log(place.address_components)
      this.addressField.value = place.address_components[0].long_name;  // Set the formatted address in the input field
    }
  }

}
