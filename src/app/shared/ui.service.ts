import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

/** @amitaggrawal: This class will have all components mostly material one those are reusable. */
@Injectable()
export class UIService {
    private snackbarRef;

    constructor(private _snackbar: MatSnackBar) { }

    showSnackbar(message: string, durationTime: number, action?: string) {
        this.snackbarRef = this._snackbar.open(message, action, {
            duration: durationTime
        });

        this.snackbarRef.onAction().subscribe(() => {
            //if action is there handle it here.
        });
    }
}