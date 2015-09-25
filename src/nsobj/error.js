/**
 * Return a new instance of nlobjError used system or user-defined error object.
 *
 * @classDescription Encapsulation of errors thrown during script execution.
 * @return {nlobjError}
 * @constructor
 */
function nlobjError(code, error, suppressnotification) {
    this.id = null;
    this.code = code;
    this.details = error;
    this.stacktrace = 'stacktrace: ...';
    this.suppressnotification = suppressnotification;
    if (code instanceof nlobjError/* || code instanceof NLXMLResponseError*/) {
        this.id = code.getId();
        this.code = code.getCode();
        this.details = code.getDetails();
        if (code instanceof nlobjError)
            this.stacktrace = code.getStackTrace();
    }
    this.name = this.code;
    /* exposed for compatibility with Javascript Error object. */
    this.message = this.details;
    /* exposed for compatibility with Javascript Error object. */
    this.description = this.details;
    /* exposed for compatibility with Javascript Error object. */
}

/**
 * return the error db ID for this error (if it was an unhandled unexpected error).
 * @return {string}
 *
 * @method
 * @memberOf nlobjError
 *
 * @since 2008.2
 */
nlobjError.prototype.getId = function () {
    return this.id;
};

/**
 * return the error code for this system or user-defined error.
 * @return {string}
 *
 * @method
 * @memberOf nlobjError
 *
 * @since 2008.2
 */
nlobjError.prototype.getCode = function () {
    return this.code;
};

/**
 * return the error description for this error.
 * @return {string}
 *
 * @method
 * @memberOf nlobjError
 *
 * @since 2008.2
 */
nlobjError.prototype.getDetails = function () {
    return this.details;
};

/**
 * return a stacktrace containing the location of the error.
 * @return {string[]}
 *
 * @method
 * @memberOf nlobjError
 *
 * @since 2008.2
 */
nlobjError.prototype.getStackTrace = function () {
    return this.stacktrace;
};

/**
 * return the userevent script name where this error was thrown.
 * @return {string}
 *
 * @method
 * @memberOf nlobjError
 *
 * @since 2008.2
 */
nlobjError.prototype.getUserEvent = function () {
    return 'event';
};

/**
 * return the internalid of the record if this error was thrown in an aftersubmit script.
 * @return {int}
 *
 * @method
 * @memberOf nlobjError
 *
 * @since 2008.2
 */
nlobjError.prototype.getInternalId = function () {
    return -1;
};