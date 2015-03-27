/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name : ['node_regex'],
  /**
   * Your New Relic license key.
   */
  license_key : '388a69ff95a524d34e15f43d3c34d384457054fb',
  // license_key : 'license key here',
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'trace'
  },

  capture_params : true,

  transaction_tracer : {
    enabled : true,
    transaction_threshold : 'apdex_f'
  },
  apdex_t : 0.001,
  error_collector : {
    enabled: true,
    ignore_status_codes : [400,401,404,405]
  }
};
