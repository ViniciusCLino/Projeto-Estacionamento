import { ModelBase } from '../model-base/model-base';
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export abstract class ServiceBase<T extends ModelBase> {
    protected toGetParams(obj: object, removeAttr?: Array<any>): HttpParams {
        removeAttr = removeAttr ? removeAttr : [];
        let url = '';
        let newObj: HttpParams = new HttpParams()
        if (obj) {
            url = '?';
            let isPrimeiroParam = true;
            Object.entries(obj).forEach(([index, val]) => {
                let isParam = true;
                // removeAttr.forEach((rem) => {
                //     if (rem === index) {
                //         isParam = false;
                //     }
                // });
                if (isParam) {
                    if (val instanceof Date) {
                        val = moment(val).format('YYYY-MM-DD');
                    }
                    if ((val || val === 0) && val.length !== 0) {
                        if (!isPrimeiroParam) {
                            url += '&';
                        }
                        isPrimeiroParam = false;
                        url += index + '=' + val;
                        newObj = newObj.append(index, val)
                    }
                }
            });
        }
        return newObj;
    }
}
