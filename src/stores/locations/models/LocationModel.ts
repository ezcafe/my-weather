import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {"title":"San Francisco","location_type":"City","woeid":2487956,"latt_long":"37.777119, -122.41964"}
 */
export default class LocationModel extends BaseModel {
    public readonly title: string = '';
    public readonly location_type: string = '';
    public readonly woeid: number = 0;
    public readonly latt_long: string = '';

    /*
     * Client-Side properties (Not from API)
     */
    // public noneApiProperties: unknown = null;

    constructor(data: Partial<LocationModel>) {
        super();

        this.update(data);
    }
}
