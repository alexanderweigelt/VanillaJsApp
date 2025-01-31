/* tslint:disable */
/* eslint-disable */
/**
 * FindYouApi
 * Find You
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface FindYou
 */
export interface FindYou {
  /**
   *
   * @type {number}
   * @memberof FindYou
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof FindYou
   */
  property?: string;
}

/**
 * Check if a given object implements the FindYou interface.
 */
export function instanceOfFindYou(value: object): value is FindYou {
  return true;
}

export function FindYouFromJSON(json: any): FindYou {
  return FindYouFromJSONTyped(json, false);
}

export function FindYouFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FindYou {
  if (json == null) {
    return json;
  }
  return {
    id: json["id"] == null ? undefined : json["id"],
    property: json["property"] == null ? undefined : json["property"],
  };
}

export function FindYouToJSON(json: any): FindYou {
  return FindYouToJSONTyped(json, false);
}

export function FindYouToJSONTyped(
  value?: FindYou | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    id: value["id"],
    property: value["property"],
  };
}
