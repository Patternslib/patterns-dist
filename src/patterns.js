/* Patterns bundle configuration.
 * All imports here will go into the compiled bundle.
 */

// Import base
import "@patternslib/patternslib/src/globals";
import registry from "@patternslib/patternslib/src/core/registry";
import "modernizr";

// Import all used patterns for the bundle to be generated
import "@patternslib/patternslib/src/core/push_kit";
import "@patternslib/patternslib/src/pat/ajax/ajax";
import "@patternslib/patternslib/src/pat/auto-scale/auto-scale";
import "@patternslib/patternslib/src/pat/auto-submit/auto-submit";
import "@patternslib/patternslib/src/pat/auto-suggest/auto-suggest";
import "@patternslib/patternslib/src/pat/autofocus/autofocus";
import "@patternslib/patternslib/src/pat/breadcrumbs/breadcrumbs";
import "@patternslib/patternslib/src/pat/bumper/bumper";
import "@patternslib/patternslib/src/pat/calendar/calendar";
import "@patternslib/patternslib/src/pat/carousel/carousel";
import "@patternslib/patternslib/src/pat/checklist/checklist";
import "@patternslib/patternslib/src/pat/clone/clone";
import "@patternslib/patternslib/src/pat/collapsible/collapsible";
import "@patternslib/patternslib/src/pat/colour-picker/colour-picker";
import "@patternslib/patternslib/src/pat/date-picker/date-picker";
import "@patternslib/patternslib/src/pat/datetime-picker/datetime-picker";
import "@patternslib/patternslib/src/pat/depends/depends";
import "@patternslib/patternslib/src/pat/display-time/display-time";
import "@patternslib/patternslib/src/pat/equaliser/equaliser";
import "@patternslib/patternslib/src/pat/expandable-tree/expandable-tree";
import "@patternslib/patternslib/src/pat/focus/focus";
import "@patternslib/patternslib/src/pat/form-state/form-state";
import "@patternslib/patternslib/src/pat/forward/forward";
import "@patternslib/patternslib/src/pat/fullscreen/fullscreen-close";
import "@patternslib/patternslib/src/pat/fullscreen/fullscreen";
import "@patternslib/patternslib/src/pat/gallery/gallery";
import "@patternslib/patternslib/src/pat/image-crop/image-crop";
import "@patternslib/patternslib/src/pat/inject/inject";
import "@patternslib/patternslib/src/pat/legend/legend"; // NOTE: Transforms <legend> tags to <p class="legend"> for styling reasons.
import "@patternslib/patternslib/src/pat/markdown/markdown";
import "@patternslib/patternslib/src/pat/masonry/masonry";
import "@patternslib/patternslib/src/pat/menu/menu";
import "@patternslib/patternslib/src/pat/modal/modal";
import "@patternslib/patternslib/src/pat/navigation/navigation";
import "@patternslib/patternslib/src/pat/notification/notification";
import "@patternslib/patternslib/src/pat/push/push";
import "@patternslib/patternslib/src/pat/scroll-box/scroll-box";
import "@patternslib/patternslib/src/pat/scroll/scroll";
import "@patternslib/patternslib/src/pat/selectbox/selectbox";
import "@patternslib/patternslib/src/pat/slides/slides";
import "@patternslib/patternslib/src/pat/sortable/sortable";
import "@patternslib/patternslib/src/pat/stacks/stacks";
import "@patternslib/patternslib/src/pat/subform/subform";
import "@patternslib/patternslib/src/pat/switch/switch";
import "@patternslib/patternslib/src/pat/syntax-highlight/syntax-highlight";
import "@patternslib/patternslib/src/pat/tabs/tabs";
import "@patternslib/patternslib/src/pat/toggle/toggle";
import "@patternslib/patternslib/src/pat/tooltip/tooltip";
import "@patternslib/patternslib/src/pat/validation/validation";
import "@patternslib/patternslib/src/pat/zoom/zoom";

// External patterns
import "@patternslib/pat-content-mirror";
import "@patternslib/pat-doclock";
import "@patternslib/pat-shopping-cart";
import "@patternslib/pat-sortable-table";
import "@patternslib/pat-tiptap";
import "@patternslib/pat-upload";

// Importing pattern styles in JavaScript
// Set to ``true`` to include core styles via JavaScript
//window.__patternslib_import_styles = false;

registry.init();
