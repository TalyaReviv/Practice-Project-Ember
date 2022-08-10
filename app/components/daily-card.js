import Component from '@glimmer/component';

export default class DailyCardComponent extends Component {
    get normalizeMinTemp() {

        const min = 15;//Math.floor(((this.args.singleday - 32) * 5) / 9);
        const max=10;
    // const max = Math.floor(((this.args.singleday.maxTemp - 32) * 5) / 9);

        return 'From ${min}° To ${max}°';
    }
}