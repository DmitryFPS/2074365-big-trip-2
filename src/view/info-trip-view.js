import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

/**
 * Создать шаблон для информации о поездке
 * @function createInfoTripTemplate
 * @return {String}
 */
const createInfoTripTemplate = () =>
  `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
    </div>
    <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
    </p>
  </section>`;

/**
 * Представление для информации о поездке
 * @class InfoTripView
 * @extends AbstractView
 * @export
 * @default
 */
export default class InfoTripView extends AbstractStatefulView {

  /**
   * Получить шаблон информации назначения
   * @public
   * @method template
   * @return {String}
   */
  get template() {
    return createInfoTripTemplate();
  }

  _restoreHandlers() {
    return undefined;
  }
}
