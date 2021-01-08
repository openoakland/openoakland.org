import {html, render} from 'https://unpkg.com/lit-html@^1?module';

/**
 * @fileoverview
 * 
 * A custom element which wraps the project section of the /projects page.
 * The /projects page contains dropdown buttons with checkboxes to enable or disable tag filters.
 * This element listens for when the user clicks on any of those checkboxes. It then looks
 * at each project and checks to see if the project's card matches any of the enabled filters.
 */
class ProjectFilter extends HTMLElement {

  /**
   * Converts an array of tag strings into an internal Set which is used
   * to filter projects.
   * @param {string[]} values An array of tag strings
   */
  set filters(values) {
    this._filters = new Set(values);
    this.filterProjects();
  }

  /**
   * @return {Set}
   */
  get filters() {
    return this._filters;
  }

  constructor() {
    super();
    this._filters = new Set();
    // Bind the onChange handler to this custom element.
    // If we didn't do this, then onChange would be bound to the checkboxes themselves.
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Runs when the custom element's script loads.
   */
  connectedCallback() {
    this.update();
    // Do an intial check for any enabled filters.
    this.onChange();
    this.addEventListener('change', this.onChange);
  }

  /**
   * Runs whenever the custom element is removed from the page.
   */
  disconnectedCallback() {
    this.removeEventListener('change', this.onChange);
  }

  update() {
    const template = html`
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Status
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="px-3 py-1">
            <div class="form-check">
              <input type="checkbox" checked class="form-check-input" id="dropdownCheck" data-tag="ongoing">
              <label class="form-check-label" for="dropdownCheck">
                Ongoing
              </label>
            </div>
            <div class="form-check">
              <input type="checkbox" checked class="form-check-input" id="dropdownCheck" data-tag="active">
              <label class="form-check-label" for="dropdownCheck">
                Active
              </label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="dropdownCheck" data-tag="inactive">
              <label class="form-check-label" for="dropdownCheck">
                Inactive
              </label>
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="dropdownCheck" data-tag="decommissioned">
              <label class="form-check-label" for="dropdownCheck">
                Decommissioned
              </label>
            </div>
          </div>
        </div>
      </div>
    `;

    render(template, this.querySelector('.project-filter__toolbar'));
  }

  /**
   * Runs whenever a user checks a filter checkbox.
   * Grabs the data-tag attribute off of the checkbox and compiles them
   * into an array of tags to filter by.
   */
  onChange() {
    this.filters = Array.from(this.querySelectorAll('.form-check-input'))
      .filter((item) => item.checked)
      .map((item) => item.getAttribute('data-tag'));
  }

  /**
   * Filter the project cards by their tags.
   */
  filterProjects() {
    // Find every project card
    const projects = Array.from(this.querySelectorAll('.card.projects'));

    // For each project card, grab its data-tags attribute and convert it into an array of tags.
    // The data-tags attribute should be a comma separated string.
    // example: data-tags="active,node.js,education"
    //
    // Check to see if ANY of the project's tags have been enabled in this.filters.
    // If a project does not match any of the filters, then mark it as hidden.
    projects.forEach((project) => {
      const projectTags = project.dataset.tags.split(',');
      for (const tag of projectTags) {
        if (this.filters.has(tag)) {
          project.removeAttribute('hidden');
          return;
        }
      }
      project.setAttribute('hidden', '');
    });
  }
}

customElements.define('project-filter', ProjectFilter);
