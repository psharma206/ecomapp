import { HttpParams } from '@angular/common/http';
import { List } from 'immutable';
import { FormGroup } from '@angular/forms';

export interface IConfig {
  SERVER: { [key: string]: string };
}


export enum RequiredFormat {
  UNDERLINE,
  STAR,
  BORDER
}

export  enum ViewMode {
    NONE = 0,
    TAB = 1,
    ACCORDIAN = 2
}



interface GlobalSetting {
  isEntityRoleOn: boolean;
}

interface ILocaleI {
  culture: string;
  dateFormat: string;
  languageId: string;
  languageName: string;
  timeFormat: string;
}

interface IUtility {
  isNoRequiredField: boolean;
}


export enum EAction {
  ADD,
  ONLOAD,
  ONREADY,
  REMOVE,
  SELECT,
  CHANGE,
  DELETE,
  BLUR,
  FOCUS,
  PANELOPEN,
  AUTOCOMPLETEINIT,
  NOSELECTEDROW,
  BEFORESAVE,
  EDIT,
  CLEAR,
  FORMDIRTY,
  DELETEANDSAVE,
  ONRENDER,
  ONCLOSEPOPUP
}

export interface IRequest {
  url: string;
  methodtype: EMethod;
  params?: HttpParams;
  body?: any;
  serverSideFilter?: boolean;
}

export interface IResponse {
  _embedded: Array<any>;
  count: number;
  pageSize: number;
  currentPageNumber: number;
  start: number;
  total: number;
  _links: any;
}

export interface IAdditionalParams {
  gridId: string;
  totalCount: number;
  pageSize: number;
}

export enum EMethod {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE
}

export interface OrghEntity {
  shortCode: string;
  label: string;
  value: number;
}

export interface Button {
  rel: string;
  title: string;
  type?: string;
  disabled?: boolean;
}

export interface IDropdownOption {
  label?: string; value: any; fieldname?: any; iconSrc?: string 
}

export enum EFieldsType {
  codeLookup = 0,
  userLookup = 1,
  dropdown = 2,
  textInput = 3,
  dxcDate = 4,
  checkbox = 5,
  textArea = 6,
  orghLookup = 7,
  crudLookup = 8,
  supplementalGrid = 9
}


export interface IDropdownProperties extends IFieldsBaseProperties {
  theme?: string,
  multiple: boolean,
  options: IDropdownOption[],
  disableRipple?: boolean,
  iconPosition?: string,
  viewValue: string,
  margin: any,
  isApplyChangeEvent: boolean
}

export interface ICheckboxProperties extends IFieldsBaseProperties {
  id: string,
  theme: string,
  value: string,
  checked: boolean,
  arialabelledby: string,
  disableRipple: boolean,
  labelPosition: string,
  margin: string,
  size: any;
}

export interface ITextInputProperties extends IFieldsBaseProperties {
  prefix?: string;
  suffix?: string;
  prefixIconSrc?: string;
  suffixIconSrc?: string;
  theme?: string;
  multiline: boolean;
  invalid?: boolean;
  assistiveText?: string;
  margin?: any;
  size?: string;
  type?: string;
}

export interface ITextAreaInputProperties extends IFieldsBaseProperties {
  id: string;
  autosizeMaxRows: number;
  autosizeMinRows: number;
  textareaAutosize?: boolean;
  value: string;
  maxLength: number;
}

export interface IDateProperties extends IFieldsBaseProperties {
  format: string,
  theme: string,
  iconSrc?: string,
  assistiveText?: string,
  invalid: boolean,
  disableRipple: boolean,
  margin?: string,
  size?: string
}


export interface IFieldsBaseProperties {
  disabled: boolean,
  readonly: boolean,
  label: string,
  style: string,
  visible: boolean,
  required: boolean,
  name: string,
  valueProperty: string,
  fieldType: EFieldsType,
  controlChangeRequest?: IRequest
}

export interface IFormUpdateEventFormat {
  action: EAction,
  columns: any,
  data: any,
  control: any,
  form: FormGroup
  error: { isError: false, msg: "" };
}
