import { shallowMount } from '@vue/test-utils';
import { Paginator } from '../pagination/paginator.interface';
import Pagination from '@/components/shared/pagination/Paginator.vue';
import { Wrapper } from 'tests/utils/VueWrapper';

const mockPaginatorConfig: Paginator = {
  pageSize: 8,
  toItem: 8,
  pageCount: 8,
  fromItem: 0,
  nextDisabled: false,
};

describe('Paginator', () => {
  let mountFunc: Wrapper;

  beforeEach(() => {
    mountFunc = (options) => {
      return shallowMount(Pagination, { ...options });
    };
  });

  it('sets prev button disabled when is the first page', () => {
    const wrapper = mountFunc({
      props: { config: mockPaginatorConfig },
    });

    const prevBtn = wrapper.find('[data-test="prevBtn"]');

    expect(prevBtn.classes()).toContain('disabled');
  });

  it('sets next button disabled when is the last page', () => {
    const wrapper = mountFunc({
      props: {
        config: {
          ...mockPaginatorConfig,
          nextDisabled: true,
        },
      },
    });

    const nextBtn = wrapper.find('[data-test="nextBtn"]');

    expect(nextBtn.classes()).toContain('disabled');
  });

  it('renders correct page number', () => {
    const wrapper = mountFunc({
      props: { config: mockPaginatorConfig },
    });

    const pageNumber = wrapper.find('[data-test="pageNumber"]');

    expect(pageNumber.text()).toEqual('1');
  });

  it('triggers an event when prev button is clicked', async () => {
    const wrapper = mountFunc({
      props: { config: mockPaginatorConfig },
    });

    await wrapper.find('[data-test="nextBtn"]').find('a').trigger('click');
    const events = wrapper.emitted();

    expect(events['page-changed']).toHaveLength(1);
    expect(events['update:config']).toHaveLength(1);
  });
});
