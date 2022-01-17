import { shallowMount } from '@vue/test-utils';
import InfiniteScroll from '@/components/shared/pagination/InfiniteScroll.vue';
import { Paginator } from '../pagination/paginator.interface';
import { Wrapper } from 'tests/utils/VueWrapper';

const mockPaginatorConfig: Paginator = {
  pageSize: 8,
  toItem: 8,
  pageCount: 8,
  fromItem: 0,
  nextDisabled: false,
};

describe('InfiniteScroll', () => {
  let mountFunc: Wrapper;

  beforeEach(() => {
    mountFunc = (options) => {
      return shallowMount(InfiniteScroll, { ...options });
    };
  });

  it('triggers an event when page bottom is reached', () => {
    const wrapper = mountFunc({
      props: { config: mockPaginatorConfig },
    });

    wrapper.vm.handleScrollToBottom();
    const events = wrapper.emitted();

    expect(events['bottom-reached']).toHaveLength(1);
    expect(events['update:config']).toHaveLength(1);
  });

  it('does not emit event when next is disabled', () => {
    const wrapper = mountFunc({
      props: {
        config: {
          ...mockPaginatorConfig,
          nextDisabled: true,
        },
      },
    });

    wrapper.vm.handleScrollToBottom();
    const events = wrapper.emitted();

    expect(Object.keys(events)).toHaveLength(0);
  });
});
