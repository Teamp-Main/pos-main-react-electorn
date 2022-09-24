import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { MacUpdater } from 'electron-updater';

export interface TagEventDefine {
  tagShowEvent: {
    isSideBar: boolean;
  };
}

const initialState: TagEventDefine = {
  tagShowEvent: {
    isSideBar: false,
  },
};
export const eventSlice = createSlice({
  name: 'eventSlice',
  initialState,
  reducers: {
    setIsShow: (state: TagEventDefine, action: PayloadAction<boolean>) => {
      state.tagShowEvent.isSideBar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsShow } = eventSlice.actions;

export default eventSlice.reducer;
