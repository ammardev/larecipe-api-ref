import ApiRef from './ApiRef';
import ApiRefItem from './ApiRefItem';

LaRecipe.booting((Vue) => {
    Vue.component(ApiRef.name, ApiRef);
    Vue.component(ApiRefItem.name, ApiRefItem);
})