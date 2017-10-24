/*jshint sub:true*/

/**
 * Copyright (c) 2015 Metropolitan Transportation Authority
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * @authors https://github.com/camsys/onebusaway-nyc-atstop/graphs/contributors
 */

angular.module('atstop.apc.service', ['ionic', 'configuration'])

/**
 * helper functions for apc occupancy status
 */
.factory('apcService', ['$log', '$timeout',
    function($log, $timeout) {
        function getOccupancyStatus(monitoredVehicle) {
            var occupancy = monitoredVehicle.Occupancy;
            if (occupancy === "seatsAvailable") {
                occupancy = "seats available";
            } else if (occupancy === "full") {
                occupancy = "full";
            }
            return occupancy;
        }

        return {
            getOccupancyStatus: getOccupancyStatus
        };
    }
]);